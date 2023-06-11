import React, { useState } from 'react'
import Navbar from '../component/navbar/Navbar'
import Profile from './Profile'
import { organizationType } from '../static/data'
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions/organizationActions';


const Signup = () => {

    const dispatch = useDispatch();


    const [formData, setFormData] = useState({
        name: '',
        location: '',
        established: '',
        phoneNumber: '',
        email: '',
        logo: "",
        description: '',
        programType: '',
        adminName: '',
        adminEmail: '',
        adminPassword: '',
        adminPhone: '',
        website: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleLogoChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };

    const registerOrganization = (e) => {
        e.preventDefault();
    
        let organizationData = {
            name: formData.name,
            location: formData.location,
            established: formData.established,
            website: formData.website,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            logo: formData.logo,
            description: formData.description,
            programType: formData.programType,
            admin: {
                name: formData.adminName,
                email: formData.adminEmail,
                password: formData.adminPassword,
                phone: formData.adminPhone,
            },
        };
        dispatch(register(organizationData));
    };


    return (
        <div className='bg-gray-900'>
            <Navbar />
            <h1 className='text-center mt-10 text-white text-3xl'>Create Your College/University Group On AliLink </h1>
            <div className='pb-20 w-100 h-full mt-10 bg-gray-900 flex item-center justify-center'>

                <form onSubmit={registerOrganization}>

                    <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input value={formData.name} onChange={handleChange} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input value={formData.location} onChange={handleChange} type="text" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="established" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Established</label>
                            <input value={formData.established} onChange={handleChange} type="text" id="established" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                    </div>


                    <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="mb-6">
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input value={formData.phoneNumber} onChange={handleChange} type="text" id="phoneNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input value={formData.email} onChange={handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="logo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
                            <input value={formData.logo} onChange={handleLogoChange} type="file" id="logo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                    </div>



                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea value={formData.description} onChange={handleChange} id="description" rows="4" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></textarea>
                    </div>

                    <div className='mb-6'>
                        <label onChange={handleChange} htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                        <input value={formData.website} onChange={handleChange} type="text" id="website" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="programType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program Type</label>
                        <select value={formData.programType} onChange={handleChange} id="programType" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                            <option value="">Select Program Type</option>
                            {
                                organizationType?.map((type, index) => {
                                    return <option value={type}>{type}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="adminName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Name</label>
                        <input value={formData.adminName} onChange={handleChange} type="text" id="adminName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label value={formData.adminEmail} onChange={handleChange} htmlFor="adminEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Email</label>
                        <input value={formData.adminEmail} onChange={handleChange} type="email" id="adminEmail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="adminPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Password</label>
                        <input value={formData.adminPassword} onChange={handleChange} type="password" id="adminPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="adminPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Phone</label>
                        <input value={formData.adminPhone} onChange={handleChange} type="text" id="adminPhone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>
            </div>
            
        </div>
    )
}

export default Signup;