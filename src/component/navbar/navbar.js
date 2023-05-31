import React from 'react';
import { Link } from 'react-router-dom';
import alilinkLogo from '../../assest/logos/alulink_logo.png'

export default function Navbar() {
    return (
        <div className='flex text-white navbar bg-gray-800 justify-between h-18'>
            <Link to="/">
                <img src={alilinkLogo} className='h-16 sm:h-24 mt-2' alt='alulink logo' />
            </Link>
            <div className='font-bold flex mt-1'>
                <Link to="/login">
                    <button className="border-2  mt-6 border-white rounded-2xl w-24 sm:w-32 h-10 sm:h-12 mr-4 sm:mr-8 border-1 transition duration-300 hover:border-gray-600 hover:border-3">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="border-2 mr-14 mt-6 border-white rounded-2xl w-24 sm:w-32 h-10 sm:h-12 border-1 transition duration-300 hover:border-gray-600 hover:border-3">
                        Sign up free
                    </button>
                </Link>
            </div>
        </div>
    )
}
