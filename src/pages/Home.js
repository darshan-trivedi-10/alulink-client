import React from 'react'
import alilinkLogo from '../assest/logos/alulink_logo.png'

const Home = () => {
  return (
    <div className='Home'>
      <div className='flex text-white navbar bg-gray-800 justify-between h-24 w-screen'>
        <img src={alilinkLogo} className='h-36 -mt-6' alt='alulink logo' />
        <div className='font-bold'>
          <button class="border-2 border-white rounded-2xl w-32 h-12 mr-8 mt-5 border-1 transition duration-300 hover:border-gray-600 hover:border-3">
            Login
          </button>
          <button class="border-2 border-white rounded-2xl w-32 h-12 border-1 transition duration-300 hover:border-gray-600 hover:border-3">
            Sign up free
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home;