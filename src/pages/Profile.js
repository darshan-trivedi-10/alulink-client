import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../component/navbar/Navbar';

export default function Profile() {
    const user = {
        "data": {
            "user": {
                "name": "Darshan Trivedi",
                "location": "Ahmedabad",
                "established": "1948-01-01T00:00:00.000Z",
                "website": "https://trivedi.in",
                "phoneNumber": "",
                "email": "",
                "logo": "",
                "description": "Update the package that requires node-waf: Check if there is an updated version of the jwt package available that doesn't rely on node-waf. You can try searching for an alternative package or check if the current version of jwt has an updated release.",
                "programType": "MBBS",
                "isVerified": false,
                "admin": {
                    "name": "Darshan Trivedi",
                    "email": "trivedidarshan30@gmail.com",
                    "password": "node-waf",
                    "phone": "9898363695"
                }
            }
        }
    }

    return (
        <>
            <Navbar />

            <div>
                <div className="bg-gray-gray0 p-6 flex flex-col text-center border-b border-primaryBorder box-border">
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="grid grid-cols-3 w-full">
                            <div className="mr-auto max-w-fit"></div>
                            <div className="mx-auto drop-shadow-[0px_4px_16px_rgba(33,33,33,0.15)] mb-4 max-w-fit border-2 border-white rounded-full">
                                <div className="w-[100px] h-[100px] relative">
                                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                        <img className="w-[100px] h-[100px] rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/company/COMHP68Q9JEGJOQB7FMEK8AJ6MG7BB/logo.webp" alt="" width="100" height="100" />
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
                                        <path d="M20 10C20 14.418 12 22 12 22C12 22 4 14.418 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V10Z" stroke-width="2" stroke="currentColor"></path>
                                        <path d="M12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11Z" fill="#212121" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                                <p className="">{user.data.user.location}</p>
                            </span>
                        </button>
                        <a href={user.data.user.website} rel="noreferrer" target="_blank" className="mx-4">
                            <span className="text-primary font-semibold text-xs  flex items-center text-gray">
                                <span className="mr-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_16580_41593)">
                                            <path d="M7.45898 4.5L8.77148 3.1875C9.05875 2.90023 9.39979 2.67236 9.77512 2.51689C10.1505 2.36143 10.5527 2.28141 10.959 2.28141C11.3652 2.28141 11.7675 2.36143 12.1429 2.51689C12.5182 2.67236 12.8592 2.90023 13.1465 3.1875C13.4338 3.47477 13.6616 3.8158 13.8171 4.19113C13.9726 4.56647 14.0526 4.96874 14.0526 5.375C14.0526 5.78126 13.9726 6.18354 13.8171 6.55887C13.6616 6.9342 13.4338 7.27523 13.1465 7.5625L11.834 8.875M9.20898 11.5L7.89648 12.8125C7.60922 13.0998 7.26818 13.3276 6.89285 13.4831C6.51752 13.6386 6.11524 13.7186 5.70898 13.7186C4.88851 13.7186 4.10165 13.3927 3.52148 12.8125C2.94132 12.2323 2.61539 11.4455 2.61539 10.625C2.61539 9.80453 2.94132 9.01766 3.52148 8.4375L4.83398 7.125" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M6.58398 9.75L10.084 6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
            </div>


        </>
    )
}
