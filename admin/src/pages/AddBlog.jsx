import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { blogSchema } from '../schema';
import PageHeading from '../components/PageHeading';
import ImageUpload from '../components/ImageUpload';
import { CloudUpload } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import axios from 'axios';

function AddBlog() {

  const [filePreview, setFilePreview] = useState(null);

  //registering form and its input field
  const { register,handleSubmit,formState:{errors}, setValue } = useForm({
      resolver:yupResolver(blogSchema)
  });


  const handleFileChange = (event) => {
      const file =  event.currentTarget.files[0];
      setValue('image',file);
      if(file) {
        setFilePreview(URL.createObjectURL(file));
      }
      console.log(file);
  }

  const deletePreview = () => {
    setFilePreview(null);
  }

  const onSubmit  =  async (data,errors) => {
    console.log(errors);
    try {
      const formData = new FormData();
      
      // Object.keys(values).forEach(key=>{     
      //   formData.append(key,values[key])
      // }) 

      Object.keys(data).forEach(key=>{
        console.log('key is ', key);
         
        console.log('data[key] ', data[key])
        formData.append(key,data[key])
      });

      for (let pair of formData.entries()) {
        console.log(`check ${pair[0]}: ${pair[1]}`);
      }

      const response = await axios.post('/api/v1/blog',data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('form submitted successfully ', response)
    } catch (error) {
      console.log('Error submitting form ', error)
    }     
  }

  return (
    <>
      <PageHeading heading="Add Blog" breadCrumb={[{label:'AddBlog',path:'/blog'}]} />
      {console.log(errors)}
      <form className='grid grid-cols-2 gap-y-2.5 gap-x-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='white-box-cont'>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Title <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' {...register('title')}/>
            <p className='text-perfect-storm text-xs mt-1'>Do not exceed 20 characters when entering the product name.</p>
            {errors.title?.message && <p className='text-red-600 text-xs mt-2.5'>{errors.title?.message}</p>}
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Content <span className='text-red-600'>*</span></label>  
            <textarea  name="content" placeholder="your content comes here" className='input-custom h-48' {...register('content')}  /> 
            {errors.content?.message && <p className='text-red-600 text-xs mt-2'>{errors.content?.message}</p>}           
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Topic <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' {...register('topic')} />  
            {errors.topic?.message && <p className='text-red-600 text-xs mt-2'>{errors.topic?.message}</p>}                 
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Seo title <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' {...register('seoTitle')} />     
            {errors.seoTitle?.message && <p className='text-red-600 text-xs mt-2'>{errors.seoTitle?.message}</p>}            
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Status<span className='text-red-600'>*</span></label>  
            <span><input type='checkbox' className='' {...register('status')} />   On     </span>  
            {errors.status?.message && <p className='text-red-600 text-xs mt-2'>{errors.status?.message}</p>}   
          </fieldset>



        </div>
        <div className='white-box-cont'>
          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Seo Description <span className='text-red-600'>*</span></label>  
            <textarea  name="content" placeholder="Add Seo description for your blog" className='input-custom h-48' {...register('seoDescription')} />            
            {errors.seoDescription?.message && <p className='text-red-600 text-xs mt-2'>{errors.seoDescription?.message}</p>}  
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Image Alt<span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' {...register('altImage')} />            
            {errors.altImage?.message && <p className='text-red-600 text-xs mt-2'>{errors.altImage?.message}</p>}  
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Upload images <span className='text-red-600'>*</span></label>  
            <div className='flex gap-10'>
              { filePreview && 
                <div className="uploaded-img-cont">
                   <img src={filePreview} className='object-cover'  />
                   <Trash2  size={50} className='absolute top-0 right-0 p-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer' onClick={deletePreview} />
                </div>
              }
              { !filePreview && (
                <div className='image-upload-cont'>
                  <label htmlFor='blogImage' className='w-full h-full flex items-center justify-center gap-2.5 cursor-pointer flex-col'>
                    <CloudUpload size={20}/>
                    <span className='w-[177px] text-xs text-center'>Drop your images here or select  <span className='text-bolt-blue'>click to browse</span></span>
                    <input type='file' id='blogImage' name='image' className='absolute invisible opacity-0' {...register('image')} onChange={handleFileChange} />
                  </label>
                </div>
              )}              
            </div>        
            {errors.image?.message && <p className='text-red-600 text-xs mt-2'>{errors.image?.message}</p>}  
          </fieldset>

          <button type='submit' className='btn-custom'>Add Blog</button>
        </div>
      </form>
    </>
  )
}

export default AddBlog