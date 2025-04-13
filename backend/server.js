require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const app = express();

const upload = require('./middleware/multer.middleware');

//router
const blogRouter = require('./routes/blog');

app.use(cors())
app.use(express.json());



const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`);
        })

        //routes
        app.use('/api/v1/blog', upload.single('image'), blogRouter);

        
        //error handlers
        app.use(notFoundMiddleware);
        app.use(errorMiddleware);

    } catch (error) {
        console.log(error)
    }
}

start();