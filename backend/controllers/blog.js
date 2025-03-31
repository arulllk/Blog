const Blog = require ('../models/blog');
const {  NotFoundError, BadRequestError } = require('../errors');
const fs =  require('fs');

const createBlog = async(req,res) => {    
    const { title, content, topic, seoTitle, seoDescription, image, altImage  } = req.body;    
    const newBlog = new Blog({ title, content, topic, seoTitle, seoDescription, image, altImage   });
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
