import React from 'react'

const Header = () => {
  return (
    <div className='w-full fixed h-24 bg-gradient-to-b from-black text-white flex items-center justify-between px-10'>
        <img className='w-48' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" />
        
        <nav className='flex items-center space-x-5'>
            <a href="#" className='hover:text-gray-400 text-xl'>Home</a>
            <a href="#" className='hover:text-gray-400 text-xl'>TV Shows</a>
            <a href="#" className='hover:text-gray-400 text-xl'>Movies</a>
            <a href="#" className='hover:text-gray-400 text-xl'>New & Popular</a>
            <a href="#" className='hover:text-gray-400 text-xl'>Login</a>

        </nav>

    </div>
  )
}

export default Header