const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{ type:String,required:[true,"Title can't be empty"], 
            minlength:[5,'Title must be greater than 5 characters'],
            maxlength:[100,'Title must be 100 characters or fewer'] 
        },
    content:{type:String, required:[true,"Blog content can't be empty"] },
    topic:{ type:String, required:[true,"Topic can't be empty" ]},
    seoTitle:{type:String },
    seoDescription:{type:String },
    image:{type:String,required:[true,'Please add image']},
    altImage:{type:String,required:[true, 'Please add alt text to show on image for seo purpose']},
    status:{type:Boolean, default:false},
    slug:{type:String, unique:true},
    // createdBy:{type:mongoose.Types.ObjectId, ref:'User'}
},{timestamps:true})

blogSchema.pre('save',async function (next){
    if(!this.isModified('title')){
        return next();
    }

    // generate slug from title
    const slugBase =  this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    let slug = slugBase;
    let suffix = 1;
    while(await mongoose.models.Blog.findOne({slug})) {
        slug= `${slugBase}-${suffix}`
        suffix++;
    }
    this.slug = slug;
    next();
})

module.exports = mongoose.model('Blog',blogSchema);