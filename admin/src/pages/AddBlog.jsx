import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { blogSchema } from '../schema';
import PageHeading from '../components/PageHeading';
import ImageUpload from '../components/ImageUpload';

function AddBlog() {
  return (
    <>
      <PageHeading heading="Add Blog" breadCrumb={[{label:'AddBlog',path:'/blog'}]} />
      <form className='grid grid-cols-2 gap-y-2.5 gap-x-5'>
        <div className='white-box-cont'>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Title <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' />
            <p className='text-perfect-storm text-xs mt-1'>Do not exceed 20 characters when entering the product name.</p>
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Content <span className='text-red-600'>*</span></label>  
            <textarea  name="content" placeholder="your content comes here" className='input-custom h-48' />            
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Topic <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' />            
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Seo title <span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' />            
          </fieldset>



        </div>
        <div className='white-box-cont'>
          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Seo Description <span className='text-red-600'>*</span></label>  
            <textarea  name="content" placeholder="Add Seo description for your blog" className='input-custom h-48' />            
          </fieldset>

          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Image Alt<span className='text-red-600'>*</span></label>  
            <input type='text' className='input-custom' />            
          </fieldset>

          <ImageUpload />

          <button type='submit' className='btn-custom'>Add Blog</button>
        </div>
      </form>
    </>
  )
}

export default AddBlog