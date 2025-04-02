import React from 'react'

export default function TopNav () {
    return(
        <div className='w-[calc(100%-280px)] z-[2] custom-box bg-white px-5  py-4  fixed top-0 right-0 flex justify-between' style={{boxShadow:'0 4px 24px 0 rgba(20, 25, 38, 0.05)'}}>
            <div className='flex align-middle justify-start'>
                
            </div>
            <div className='flex align-middle justify-start gap-4'>
                <div className='w-[36px] h-[36px] '>
                    <img src="https://remosnextjs.vercel.app/images/avatar/user-1.png" className='rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-800 font-bold'>Kristin Watson</p>
                    <p className='text-xs'>Admin</p>
                </div>
            </div>
        </div>
    )
}