import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-100 shadow-sm p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <h1 className='font-extrabold text-sm sm:text-xl flex flex-wrap'>
                <span className='border-r-zinc-900'>Tfd</span>
                <span className='border-r-neutral-100'>stateS</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg'>
                <input type="text" placeholder='Search...' className='bg-slate-50' />
                <FaSearch className='bg-slate-100' />
            </form> 
        </div>  
    </header>  
  )
}
