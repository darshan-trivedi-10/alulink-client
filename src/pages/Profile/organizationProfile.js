import React, { useState } from 'react'
import Navbar from '../../component/navbar/Navbar';
import Overview from '../../component/organization/Overview';
import Request from '../../component/organization/Request';
import People from '../../component/organization/People';
import { useSelector } from 'react-redux';

export default function OrganizationProfile() {

    const user = useSelector((state) => state.organizationReducer.organizationData);

    const [activeComponent, setActiveComponent] = useState('overview');

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Navbar />
            <div >
                <div className='w-full flex flex-row flexWrap justify-center'>
                    <div className="lg:mr-32 border-b border-primaryBorder bg-gray-gray0 p-6 flex flex-col text-center border-b border-primaryBorder box-border">
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="grid grid-cols-3 w-full">
                                <div className="mr-auto maxW-fit"></div>
                                <div className="mx-auto drop-shadow-[0px_4px_16px_rgba(33,33,33,0.15)] mb-4 maxW-fit border-2 borderWhite rounded-full">
                                    <div className="w-[100px] h-[100px] relative">
                                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                            <img className="w-[100px] h-[100px] rounded-full bg-center bg-no-repeat bg-cover bgWhite flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 borderWhite rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHP68Q9JEGJOQB7FMEK8AJ6MG7BB/logo.webp" alt="" width="100" height="100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold mb-2">{user.data.user.name}</h1>
                            <p className="text-base font-normal">{user.data.user.programType} College</p>
                        </div>
                        <div className="flex items-center justify-center gap-8 mt-4 mb-4">
                            <button type="button" className="mx-4 cursor-default">
                                <span className="text-primary font-semibold text-xs capitalize flex items-center text-gray">
                                    <span className="mr-1">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10C20 14.418 12 22 12 22C12 22 4 14.418 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V10Z" strokeWidth="2" stroke="currentColor"></path>
                                            <path d="M12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11Z" fill="#212121" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                    <p className="">{user.data.user.location}</p>
                                </span>
                            </button>
                            <a href={user.data.user.website} rel="noreferrer" target="_blank" className="mx-4">
                                <span className="text-primary font-semibold text-xs  flex items-center text-gray">
                                    <span className="mr-1">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_16580_41593)">
                                                <path d="M7.45898 4.5L8.77148 3.1875C9.05875 2.90023 9.39979 2.67236 9.77512 2.51689C10.1505 2.36143 10.5527 2.28141 10.959 2.28141C11.3652 2.28141 11.7675 2.36143 12.1429 2.51689C12.5182 2.67236 12.8592 2.90023 13.1465 3.1875C13.4338 3.47477 13.6616 3.8158 13.8171 4.19113C13.9726 4.56647 14.0526 4.96874 14.0526 5.375C14.0526 5.78126 13.9726 6.18354 13.8171 6.55887C13.6616 6.9342 13.4338 7.27523 13.1465 7.5625L11.834 8.875M9.20898 11.5L7.89648 12.8125C7.60922 13.0998 7.26818 13.3276 6.89285 13.4831C6.51752 13.6386 6.11524 13.7186 5.70898 13.7186C4.88851 13.7186 4.10165 13.3927 3.52148 12.8125C2.94132 12.2323 2.61539 11.4455 2.61539 10.625C2.61539 9.80453 2.94132 9.01766 3.52148 8.4375L4.83398 7.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M6.58398 9.75L10.084 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_16580_41593">
                                                    <rect width="14" height="14" fill="white" transform="translate(1.33398 1)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p className="hover:underline cursor-pointer">{user.data.user.website}</p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="pr-6 flex flex-col justify-between mt-14 align-center h-full">
                        <div className="lg:mt-6">
                            <div className="flex lg:flex-row flex-col items-center lg:py-[10px] group">
                                <span className="relative text-white group-hover:text-gray-gray3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M4.27148 18.346C4.27148 18.346 6.50048 15.5 12.0005 15.5C17.5005 15.5 19.7305 18.346 19.7305 18.346M12.0005 12C12.7961 12 13.5592 11.6839 14.1218 11.1213C14.6844 10.5587 15.0005 9.79565 15.0005 9C15.0005 8.20435 14.6844 7.44129 14.1218 6.87868C13.5592 6.31607 12.7961 6 12.0005 6C11.2048 6 10.4418 6.31607 9.87916 6.87868C9.31655 7.44129 9.00048 8.20435 9.00048 9C9.00048 9.79565 9.31655 10.5587 9.87916 11.1213C10.4418 11.6839 11.2048 12 12.0005 12V12Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="lg:text-base text-[10px] lg:capitalize  transition-all lg:group-hover:translate-x-1 uppercase lg:ml-2 mt-2 lg:mt-0 font-normal">Admin Name : {user.data.user.admin.name}</span>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center lg:py-[10px] group">
                                <span className="relative text-white group-hover:text-gray-gray3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
                                </span>
                                <span className="lg:text-base text-[10px] transition-all lg:group-hover:translate-x-1 lg:ml-2 mt-2 lg:mt-0 font-normal">Admin Email : {user.data.user.admin.email}</span>
                            </div>
                            <div className="flex lg:flex-row flex-col items-center lg:py-[10px] group">
                                <span className="relative text-white group-hover:text-gray-gray3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M16.7,15.2c-0.6-0.6-1.4-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.4-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9c-1.2,1.2-1.2,3.2,0,4.4c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9c1.2-1.2,1.2-3.2,0-4.4z M12,22.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5C14.5,21.4,13.4,22.5,12,22.5z M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M12,21.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.3,9.5,9.5C21.5,17.2,17.2,21.5,12,21.5z" />
                                    </svg>
                                </span>
                                <span className="lg:text-base text-[10px] lg:capitalize  transition-all lg:group-hover:translate-x-1 uppercase lg:ml-2 mt-2 lg:mt-0 font-normal">Admin Phone Number : {user.data.user.admin.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgWhite w-full border-b border-primaryBorder px-4 sm:px-6 ">
                    <ul className="items-center grid grid-cols-4 w-full">
                        <button onClick={() => handleComponentChange('overview')}>
                            <li className='border border-primaryBorder'>
                                <p className="text-sm font-medium text-center block py-3 w-full text-primary">
                                    Overview
                                </p>
                                <div style={{ height: "2px" }} className=" w-full roundedLg bg-primary"></div>
                            </li>
                        </button>
                        <button>
                            <li className='border border-primaryBorder'>
                                <p className="text-sm font-medium text-center block py-3 w-full text-gray" >
                                    Careers
                                </p>
                                <div style={{ height: "2px" }} className=" w-full roundedLg bg-transparent"></div>
                            </li>
                        </button>
                        <button onClick={() => handleComponentChange('people')}>
                            <li className='border border-primaryBorder'>
                                <p className="text-sm font-medium text-center block py-3 w-full text-gray" href="/">
                                    People
                                </p>
                                <div style={{ height: "2px" }} className=" w-full roundedLg bg-transparent"></div>
                            </li>
                        </button>
                        <button onClick={() => handleComponentChange('request')}>
                            <li className='border border-primaryBorder'>
                                <p className="text-sm font-medium text-center block py-3 w-full text-gray" href="/">
                                    Request
                                </p>
                                <div style={{ height: "2px" }} className=" w-full roundedLg bg-transparent"></div>
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
            {activeComponent === 'overview' && <Overview description={user.data.user.description} />}
            {activeComponent === 'request' && <Request />}
            {activeComponent === 'people' && <People />}
        </>
    )
}