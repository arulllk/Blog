import React from 'react'
import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom'

function PageHeading ({heading, breadCrumb}) {  
    return (      
        <div className='flex justify-between items-center mb-[27px]'>
            <h1 className='text-2xl text-black font-bold'>{heading}</h1>   
            {breadCrumb && 
                <ul className='flex gap-2 text-xs text-black-water align-middle'>
                    <li><NavLink to="/">Home</NavLink></li>
                    { breadCrumb.map((item,index)=>{
                        return(
                            <React.Fragment key={index}>
                                <li><ChevronRight size={15} /></li>
                                <li><NavLink to={item.path}>{item.label}</NavLink></li>
                            </React.Fragment>                
                        )                        
                    })}                   
                </ul>
            }            
        </div>         
    );
}

export default PageHeading;

