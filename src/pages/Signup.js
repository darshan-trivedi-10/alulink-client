import React, { useState } from 'react'
import Navbar from '../component/navbar/Navbar'
import OrganizationSignup from '../component/auth/OrganizationSignup'
import UserSignup from '../component/auth/UserSignup';

const Signup = () => {

    const [isUserRegistation, setIsUserRegistation] = useState(false);

    return (
        <div className='bg-gray-900'>
            <Navbar />

            <div className='flex text-white justify-center'>
                <button className="rounded-xl ml-1 pl-10 pr-10 border-2 mt-6 border-white w-auto h-12  border-1 transition duration-300 hover:border-gray-600 hover:border-3" onClick={() => { setIsUserRegistation(!isUserRegistation) }}>
                    For {isUserRegistation ? "College / University" : "User"} Registration
                </button>
            </div>

            {
                isUserRegistation ? <OrganizationSignup /> : <UserSignup/>
            }

        </div>
    )
}

export default Signup;