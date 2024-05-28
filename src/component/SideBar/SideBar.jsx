import React from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from 'react'

const SideBar = () => {

  const [isOpen, setisOpen ]=useState(false)

  const sidebarButton = () =>{
    setisOpen(!isOpen)
  }

const menuItem = [
  {
    path:"/movies",
    name: "Movies",
    icon: <LocalMoviesIcon />
  },
  {
    path:"/books",
    name: "Books",
    icon: <MenuBookIcon />
  },
  {
    path:"/accessories",
    name: "Accessories",
    icon: <SmartToyIcon />
  },
  {
    path:"/cloths",
    name: "Cloths",
    icon: <CheckroomIcon />
  },
  {
    path:"/settings",
    name: "Settings",
    icon: <SettingsIcon />
  },
  {
    path:"/support",
    name: "Support",
    icon: <SupportAgentIcon />
  },

]



return (

    <>
    
    <div className="min-h-screen ">


      <div style={{width: isOpen ? "250px" : "50px"  }} className='side-bar ease-in duration-200 bg-teal-950 shadow-2xl shadow-teal-200 opacity-100 min-h-[100%] pt-14'>

        <div className="top-section flex justify-between my-4  ">
          <div style={{display: isOpen ? "block" : "none"  }} className='text-white'>logo</div>
            <button  style={{display: !isOpen ? "block" : "none"  }} 
            className='text-white mx-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl w-50 p-1	 ' 
            onClick={sidebarButton}> <ArrowForwardIosIcon/> </button>

            <button  style={{display: isOpen ? "block" : "none"  }} 
            className='text-white mx-3 bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-60% to-indigo-500 to-100% rounded-xl w-50 p-1 ' 
            onClick={sidebarButton}> <ClearIcon/></button>
        </div>
        

        { menuItem.map((item, index)=>(
          <Link to={item.path} key={index} ClassName="active" className="flex justify-around my-10 mx-3 text-white "  >
            <div style={{display: isOpen ? "block" : "disabled"  }} >{item.icon}</div>
            <div style={{display: isOpen ? "block" : "none"  }} >{item.name}</div>
            
          </Link>
        ))

        }
      
  
        </div>
        {/* <main>{Children}</main> */}
    </div>


</>
   
  )
}

export default SideBar
