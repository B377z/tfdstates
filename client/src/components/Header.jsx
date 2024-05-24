import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-100 shadow-sm p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
          <Link to='/'>
            <h1 className='font-extrabold text-sm sm:text-xl flex flex-wrap'>
                <span className='border-r-zinc-900'>Tfd</span>
                <span className='border-r-neutral-100'>stateS</span>
            </h1>
          </Link>  
            <form className='bg-slate-100 p-3 rounded-lg relative flex items-center'>
                <input type="text" placeholder='Search...' className='bg-slate-50' />
                <FaSearch className='bg-slate-100' />
            </form>
            <ul className='flex gap-4'>
              <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='hidden sm:inline text-slate-600 hover:underline'>About</li>
              </Link>
              <Link to='sign-in'>
                <li className='text-slate-700 hover:underline'>{' '}SignIn</li>
              </Link>
            </ul>
        </div>  
    </header>  
  )
}
