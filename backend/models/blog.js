const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String,required:[true,"Title can't be empty"], minlength:5,maxlength:40 },
    content:{type:String, required:[true,"Blog content can't be empty"] },
    topic:{ type:String, required:[true,"Topic can't be empty" ]},
    seoTitle:{type:String },
    seoDescription:{type:String },
    // image:{type:String,required:[true,'Please add image']},
    // altImage:{type:String,required:[true, 'Please price alt text to show on image for seo']},
    status:{type:Boolean, default:false},
    // slug:{type:String,unique:true},
    // createdBy:{type:mongoose.Types.ObjectId, ref:'User'}
},{timestamps:true})

module.exports = mongoose.model('Blog',blogSchema);