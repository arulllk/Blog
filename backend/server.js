require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connection');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//router
const blogRouter = require('./routes/blog');

app.use(express.json());


//routes
app.use('/api/v1/blog', blogRouter);

 
//error handlers
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT ? parseInt(process.env.PORT,10) : 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();