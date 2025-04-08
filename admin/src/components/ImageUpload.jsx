import React, { useState, useEffect } from 'react'
import { CloudUpload } from 'lucide-react';



function ImageUpload() {
 
  return (
    <fieldset className='flex flex-col relative'>
      <label className='mb-2.5 font-bold text-sm'>Upload images <span className='text-red-600'>*</span></label>  
      <div className='flex gap-10 '>
        <div className='image-upload-cont'>
          <label htmlFor='blogImage' className='w-full h-full flex items-center justify-center gap-2.5 cursor-pointer flex-col'>
            <CloudUpload size={20}/>
            <span className='w-[177px] text-xs text-center'>Drop your images here or select  <span className='text-bolt-blue'>click to browse</span></span>
            <input type='file' id='blogImage' name='image' className='absolute invisible opacity-0' />
          </label>
        </div>
      </div>        
    </fieldset>
  )
}

export default ImageUpload