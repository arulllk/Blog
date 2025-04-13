require('dotenv').config();
const connectDB = require('./db/connection');
const Blog = require ('./models/blog')
const jsonBlogs = require('./dummy_blogs_with_user.json');

const start  = async () => {
    try {
        console.log('MONGO_URI:', process.env.MONGO_URI);
        await connectDB(process.env.MONGO_URI);
        await Blog.deleteMany();
        await Blog.create(jsonBlogs);
        console.log('Success')
    } catch (error) {    
       console.log(error)
    }
}

start();