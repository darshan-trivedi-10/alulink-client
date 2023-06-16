import React, { useState } from 'react'
import Select from 'react-select';
import { searchOrganization } from '../../api/organizationApi'

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

    const [selectedOptions, setSelectedOptions] = useState(null);
    const [optionList, setOptionList] = useState([]);
    const [timing, setTiming] = useState([]);


    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        headline: '',
        college: "",
        startYear: 0,
        graductionYear: 0
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const registerUser = (e) => {
        e.preventDefault();

        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            dataOfBirth: formData.dataOfBirth,
            headline: formData.headline,
            phoneNumber: formData.phoneNumber,
            colleges: {
                college: formData.college,
                startYear: formData.startYear,
                graduationYear: formData.graductionYear,
            }
        };

        console.log(userData);
    };

    function handleSelect(data) {

        setFormData({ ...formData, college: data.value })
        setSelectedOptions(data);

        const startDate = new Date(data.established);
        const currentYear = new Date().getFullYear();
        const yearsArray = [];


        for (let year = startDate.getFullYear(); year <= currentYear + 10; year++) {
            yearsArray.push(year);
        }

        setTiming(yearsArray);

    }

    const updateOrganizationList = async (inputValue) => {
        let organizationList = await searchOrganization(inputValue);
        setOptionList(organizationList);
    };

    const FindOrganization = (inputValue) => {
        updateOrganizationList(inputValue);
    };

    return (
        <>
            <h1 className='text-center mt-10 text-white text-3xl'>Join Your College/University Group On AliLink </h1>
            <div className='pb-20 w-100 h-100 mt-10 bg-gray-900 flex item-center justify-center'>

                <form onSubmit={registerUser}>

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
                            onInputChange={FindOrganization}
                            styles={customStyles}
                        />
                    </div>


                    <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">

                        <div className="mb-6 w-full">
                            <label htmlFor="startYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Year</label>
                            <select value={formData.startYear} onChange={handleChange} id="startYear" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                <option value="">Start Year</option>
                                {
                                    timing?.map((type, index) => {
                                        return <option value={type}>{type}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label htmlFor="graductionYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduction Year</label>
                            <select value={formData.graductionYear} onChange={handleChange} id="graductionYear" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
                                <option value=""> Graduction Year</option>
                                {
                                    timing?.map((type, index) => {
                                        return <option value={type}>{type}</option>
                                    })
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