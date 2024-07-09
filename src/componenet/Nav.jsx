import React from 'react'
import { Link } from 'react-router-dom'
// import img from '../assets/logo.png'
export default function Nav() {
  return (
    <div className="navbar font-mono ">
  <div className="flex-1 navbar-start text-3xl">
  logl

  </div>
 

  <div className='navbar-end'>
  <ul className='flex justify-around w-96'>
      <li>
      <Link to={'/'} className=" hover:text-secondary text-">Home</Link>
      </li>
      <li>
      <Link to={'/about'} className=" hover:text-secondary "> About  </Link>
      </li>
      <li>
        {localStorage.getItem('userId')==null?
              <Link to={'/login'} className=" hover:text-secondary "> login  </Link>

        :      <Link to={'/profile'} className=" hover:text-secondary "> Profile  </Link>

        }
      </li>
    </ul>
 
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
       <Link to={'/checkout'}>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>   </Link>  
        
          <span className="badge badge-sm text-white indicator-item bg-[#E47732]">8</span>
        </div>
      </div>
  </div>
</div>
  )
}