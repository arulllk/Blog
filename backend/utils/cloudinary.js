const cloudinary = require('cloudinary').v2
const fs =  require('fs');
 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath,folder) => {
    try {
        console.log('comes here' , filePath);
        if(!filePath) return null;
        const response = await cloudinary.uploader.upload(filePath,{
            resource_type:"auto",
            folder:folder
        })      
        return response;
    } catch (error) {
        console.log('cloudinary upload error', error);
        //fs.unlinkSync(filePath)// // Delete the local file if upload fails
        return null
    }
}


module.exports  = { uploadOnCloudinary };