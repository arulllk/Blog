import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <div className='bg-white w-[280px] h-[100vh] fixed z-10' style={{boxShadow:'0 0 24px 2px rgba(20,25,38,.05)'}}>
        <div className='h-[72px] flex items-center py-[20px] px-[14px] border-b-[1px] border-b-pale-sky'>
            <img src='https://remosnextjs.vercel.app/images/logo/logo.png' />
        </div>
        <ul className='px-[14px]'>
            <li className='flex'>
                <NavLink className='p-[14px]' to="/blog">Blogs</NavLink>
            </li>
            <li className='flex'>
                <NavLink className='p-[14px]' to="/add/blog">Add Blog</NavLink>
            </li>
            <li className='flex'>
                <NavLink className='p-[14px]' to="/practice">Practice</NavLink>
            </li>           
        </ul>
    </div>
  )
}

export default SideNav