const Blog = require ('../models/blog');
const {  NotFoundError, BadRequestError } = require('../errors');
const { uploadOnCloudinary } = require('../utils/cloudinary');
const fs =  require('fs');

const createBlog = async(req,res) => {  
    if(!req.file) {
        throw new BadRequestError ('Image is missing', {'image':'Image is required'});
    }  
    const { title, content, topic, seoTitle, seoDescription, image, altImage, slug  } = req.body;   
    const imgPath = req.file.path;
    const result = await uploadOnCloudinary(imgPath,'Blog');     
    const newBlog = new Blog({ title, content, topic, seoTitle, seoDescription, image, altImage, slug, image:result.secure_url  }); 
    await newBlog.save();
    res.status(201).json({
        "status":"success",
        "message":"Blog created successfully",
        "data":{
            blog:newBlog
        }
    })
}

module.exports = { createBlog };
