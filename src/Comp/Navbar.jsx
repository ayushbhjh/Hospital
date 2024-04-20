import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='h-20 w-[100%]  border border-slate-200 bg-slate-100 text-black'>
      <nav className='flex justify-around'>
        <div className='flex items-center '>
          <Link to="/"> <img src="https://cdn-icons-png.freepik.com/256/10715/10715958.png?uid=R143719964&ga=GA1.1.2080634972.1712987199&semt=ais_hybrid" alt="remote" className='h-10 w-10' /></Link>
          <Link to="/"><h1 className=' text-xl font-bold text-blue-400'>HEALTHCARE</h1> </Link>
        </div>
        <div className='flex m-7 list-none gap-5 text-sm'>
          <Link to="/About"><li>About us</li></Link>
          <li>Our Services</li>
          <li>Our Team</li>
          <li>Contact</li>
        </div>
        <button className='border border-white bg-pink-700 text-white h-10 w-24 rounded-full mt-5'>Login</button>
      </nav>
    </div>
  )
}
