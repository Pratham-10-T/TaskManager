import React, { useContext } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { AppContext } from '../Context/AppContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  
  const {showSidebar, setShowSidebar} = useContext(AppContext)
  
  return (
    
      
    <div className='bg-black text-white px-4 py-4 w-[10vw] flex flex-col h-screen fixed z-50 left-0 right-0  gap-2'>
<div>    
      <CloseOutlinedIcon 
      className='absolute top-4 right-4 cursor-pointer' 
      onClick={()=>setShowSidebar(false)}
      />
     </div> 
     
    
     <div className='py-4 gap-24 flex flex-col'>
    <NavLink to ="/" className='cursor-pointer text-center text-xl font-bold hover:text-black hover:bg-white '>Home</NavLink>
    <NavLink to ="myTasks" className='cursor-pointer text-center text-xl font-bold hover:text-black hover:bg-white '>My Tasks</NavLink>
    </div>
    
    </div>
    )
}

export default Sidebar