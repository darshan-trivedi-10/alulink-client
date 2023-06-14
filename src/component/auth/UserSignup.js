import React, { useState } from 'react'
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(55, 65, 81, 1)', // This corresponds to bg-gray-700 in Tailwind CSS
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'rgba(255, 255, 255, 1)', // text-white
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'rgba(255 255, 255, 1)', // text-white
    }),
    input: (provided) => ({
        ...provided,
        color: 'rgba(255, 255, 255, 1)', // text-white
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? 'rgba(75, 85, 99, 1)' // bg-gray-800 for selected option
            : state.isFocused
                ? 'rgba(107, 114, 128, 1)' // bg-gray-600 for focused option
                : 'rgba(55, 65, 81, 1)', // bg-gray- for options
        color: 'rgba(255, 255, 255, 1)', // text-white
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(55, 65, 81, 1 )',// bg-gray-700
    }),
};

function UserSignup() {

    const [selectedOptions, setSelectedOptions] = useState();
    const optionList = [];


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
        // dispatch(register(organizationData));
    };

    function handleSelect(data) {
        console.log(data);
        setSelectedOptions(data);
    }

    const SeachColleges = (inputValue) => {
        
    };

    return (
        <>
            <h1 className='text-center mt-10 text-white text-3xl'>Join Your College/University Group On AliLink </h1>
            <div className='pb-20 w-100 h-100 mt-10 bg-gray-900 flex item-center justify-center'>

                <form onSubmit={registerOrganization}>

                    <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input value={formData.name} onChange={handleChange} type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input value={formData.email} onChange={handleChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input value={formData.phoneNumber} onChange={handleChange} type="text" id="phoneNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                    </div>

                    <div className="flex flex-col space-between mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                        <div className="mb-6 w-full">
                            <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                            <input value={formData.birthday} onChange={handleChange} type="date" id="birthday" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="headline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Headline</label>
                            <input value={formData.headline} onChange={handleChange} type="text" id="headline" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>

                    </div>

                    <div className="mb-6">
                        <label htmlFor="colleges" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Colleges</label>
                        <Select
                            options={optionList}
                            className="basic-single"
                            classNamePrefix="select"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            onInputChange={SeachColleges}
                            styles={customStyles}
                        />
                    </div>


                    <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">

                        <div className="mb-6 w-full">
                            <label htmlFor="startYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Year</label>
                            <select value={formData.programType} onChange={handleChange} id="programType" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                <option value="">Start Year</option>
                                {
                                    // organizationType?.map((type, index) => {
                                    // return <option value={type}>{type}</option>
                                    // })
                                }
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="startYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduction Year</label>
                            <select value={formData.programType} onChange={handleChange} id="programType" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                <option value=""> Graduction Year</option>
                                {
                                    // organizationType?.map((type, index) => {
                                    // return <option value={type}>{type}</option>
                                    // })
                                }
                            </select>
                        </div>

                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>
            </div>
        </>
    )
}

export default UserSignup

/*

---> User Schema       
name,
email, 
password, 
dateOfBirth, 
headline, 
phoneNumber, 
isVerified, 
colleges, 
startYear, 
graductionYear
*/