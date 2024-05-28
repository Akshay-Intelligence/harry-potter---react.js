import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
  return (
    <>
    <div className='bg-teal-950/0 h-20 p-4 flex justify-between fixed top-0 w-full z-50'> 
      <div className="poppins-extrabold-italic text-3xl font-semibold pl-12  bg-clip-text text-transparent bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-800/50 to-90%  ">harry potter </div>

      <div className='poppins-regular-italic w-96 flex justify-around bg-clip-text text-transparent bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-800/50 to-90%  ' >

      <Link to="/" className='navButton  hover:text-white font-md bg-clip-text text-transparent bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-800/50 to-90% '> Home</Link>
      <Link to="/shop" className='navButton hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-500 from-10% via-teal-300 via-30% to-teal-800/50 to-90%'> Store</Link>
      <Link to="/cart" className='navButton hover:text-white text-teal-500'>  <ShoppingCartIcon/></Link>
      
      </div>


    </div>
      
    </>
  )
}

export default NavBar
