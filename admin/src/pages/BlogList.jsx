import React from 'react'
import PageHeading from '../components/PageHeading';
import { Trash2 } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
 


function BlogList() {
  return (
    <>
      <PageHeading heading="Blogs" breadCrumb={[{label:'Blog',path:'/admin/blog/new'}]} />
      <div className='grid'>
        <div className="white-box-cont">
          <div className='overflow-x-auto'>
            <div className='table-col-div bg-table-highlighter mb-5'>
              <p className='table-heading'>Title</p>
              <p className='table-heading'>Description</p>
              <p className='table-heading'>Status</p>
              <p className='table-heading'>Action</p>
            </div>
            <div className='table-col-div bg-table-highlighter'>
              <div className='flex gap-3 items-center'>
                <div className='w-[50px] h-[50px] rounded-xl overflow-hidden flex-shrink-0'>
                  <img src="https://gl-m.linker-cdn.net/profile/user/062/f7a/bc75fdc9546ce4b07e723e7ab161cdef_crop1580196175.jpg" />
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-dreamless-sleep font-semibold'>Kristin Watson</p>
                </div>
              </div>

              <p className='text-xs text-perfect-storm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>                   
                </label>
              </div>

              <div className='flex gap-2'>
                <FilePenLine size={20} />                 
                <Trash2 size={20} />
              </div>
            </div>

            <div className='table-col-div'>
              <div className='flex gap-3 items-center'>
                <div className='w-[50px] h-[50px] rounded-xl overflow-hidden flex-shrink-0'>
                  <img src="https://gl-m.linker-cdn.net/profile/user/062/f7a/bc75fdc9546ce4b07e723e7ab161cdef_crop1580196175.jpg" />
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-dreamless-sleep font-semibold'>Kristin Watson</p>
                </div>
              </div>

              <p className='text-xs text-perfect-storm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>                   
                </label>
              </div>

              <div className='flex gap-2'>
                <FilePenLine size={20} />                 
                <Trash2 size={20} />
              </div>
            </div>
            <div className='table-col-div bg-table-highlighter'>
              <div className='flex gap-3 items-center'>
                <div className='w-[50px] h-[50px] rounded-xl overflow-hidden flex-shrink-0'>
                  <img src="https://gl-m.linker-cdn.net/profile/user/062/f7a/bc75fdc9546ce4b07e723e7ab161cdef_crop1580196175.jpg" />
                </div>
                <div className='flex flex-col'>
                  <p className='text-sm text-dreamless-sleep font-semibold'>Kristin Watson</p>
                </div>
              </div>

              <p className='text-xs text-perfect-storm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>                   
                </label>
              </div>

              <div className='flex gap-2'>
                <FilePenLine size={20} />                 
                <Trash2 size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList