const mongoose = require ('mongoose');

const connectDB  = (url) => {
    return mongoose
        .connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            bufferCommands: false // Prevent buffering issues
        })
        .then(()=>console.log(`Connected to Database`))
        .catch((err)=>console.log(`error is ${err}`))
}

module.exports = connectDB;