import React from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'
import { useContext } from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {

  const { watchlist } = useContext(WatchListContext)
  return (
    <nav className='flex justify-between items-center bg-[#000000] py-4 px-8 text-white fixed w-screen z-10'>
      <Link to={"/home"}><img src={logo} alt='logo' className='w-[25vw] ml-[10px] md:w-[20vw] md:ml-[100px] lg:w-[8vw]' ></img></Link>
      <p className='text-[14px] lg:text-[18px]'><Link to="/watchlist">WatchList ({watchlist.length})</Link></p>
    </nav>
  )
}

export default Navbar
