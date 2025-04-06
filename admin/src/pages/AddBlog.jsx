import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { blogSchema } from '../schema';
import PageHeading from '../components/PageHeading';

function AddBlog() {
  return (
    <>
      <PageHeading heading="Add Blog" breadCrumb={[{label:'AddBlog',path:'/blog'}]} />
      <form className='grid grid-cols-2 gap-y-8 gap-x-5'>
        <div className='white-box-cont'>
          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Title <span className='text-red-600'>*</span></label>  
            <input type='text' className='border border-[#ecf0f4] rounded-xl outline-0 shadow-none w-full px-5 py-3 leading-5  font-normal' />
          </fieldset>
        </div>
        <div className='white-box-cont'>
          <fieldset className='flex flex-col relative'>
            <label className='mb-2.5 font-bold text-sm'>Title <span className='text-red-600'>*</span></label>  
            <input type='text' className='border border-[#ecf0f4] rounded-xl outline-0 shadow-none w-full px-5 py-3 leading-5  font-normal' />
          </fieldset>
        </div>
      </form>
    </>
  )
}

export default AddBlog