const mongoose = require ('mongoose');

const connectDB  = async (url) => {
    return mongoose
        .connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Wait longer for free-tier wake-up
        })
        .then(()=>console.log(`Connected to Database`))
        .catch((err)=>console.log(`error is ${err}`))
}

module.exports = connectDB;