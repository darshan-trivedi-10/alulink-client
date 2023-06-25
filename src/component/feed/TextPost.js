import React from 'react'

function TextPost({ post }) {
    
    const datetime = new Date(post.createdAt);

    // Convert the date to the local time zone format based on browser settings
    const formattedTime = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).format(datetime);

    return (
        <>
            <article role="none" className="bgWhite p-4 md:p-8 lg:p-10 lg:px-6 border-b border-primaryBorder hover:bg-gray-gray0 cursor-pointer">
                <div>
                    <div className="flex items-center justify-between">
                        <div role="none">
                            <span className="maxW-fit">
                                <a className="flex items-center">
                                    <div className="w-10 h-10 relative">
                                        <div className="w-10 h-10 relative">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-1 bottom-0 outline-none z-1" tabIndex="-1">
                                                <rect width="24" height="24" rx="12" fill="white"></rect>
                                                <path d="M10.0425 2.74587C10.9935 1.37043 13.0066 1.37043 13.9577 2.74587V2.74587C14.5338 3.57913 15.5638 3.95843 16.5346 3.69483V3.69483C18.137 3.25971 19.6791 4.56895 19.5338 6.24112V6.24112C19.4458 7.25415 19.9939 8.21457 20.905 8.64397V8.64397C22.4089 9.35277 22.7585 11.3586 21.5848 12.5451V12.5451C20.8738 13.2639 20.6835 14.3561 21.1087 15.2775V15.2775C21.8104 16.7986 20.8039 18.5625 19.151 18.7081V18.7081C18.1497 18.7964 17.3101 19.5092 17.0503 20.4916V20.4916C16.6216 22.1132 14.7299 22.8098 13.3712 21.8465V21.8465C12.5481 21.2628 11.452 21.2628 10.6289 21.8465V21.8465C9.27027 22.8098 7.37856 22.1132 6.94981 20.4916V20.4916C6.69007 19.5092 5.85041 18.7964 4.8491 18.7081V18.7081C3.19626 18.5625 2.18971 16.7986 2.89148 15.2775V15.2775C3.31663 14.3561 3.12629 13.2639 2.41529 12.5451V12.5451C1.24166 11.3586 1.59123 9.35277 3.09516 8.64397V8.64397C4.00626 8.21457 4.55431 7.25415 4.46631 6.24112V6.24112C4.32103 4.56895 5.86316 3.25971 7.46555 3.69483V3.69483C8.43629 3.95843 9.46629 3.57913 10.0425 2.74587V2.74587Z" fill="#00AA45" stroke="#fff" strokeWidth="1.5"></path>
                                                <path d="M8 12L10.8571 14.8571L16.5714 9.14285" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <defs>
                                                    <linearGradient id="paint0_linear_18553_30777" x1="12.0001" y1="1.71429" x2="12.0001" y2="22.2857" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#27AE60"></stop>
                                                        <stop offset="1" stop-color="#1E874B"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bgWhite flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 borderWhite rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/UHA9BO68BL6LRNA2R9MD686DLDGE/ha9bo68bl6lrna2r9md686dldge-profile.webp" alt="Yogini Bende" width="40" height="40" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-2">
                                        <div className="flex items-center">
                                            <h3 className="text-sm text-primary font-medium capitalize hover:underline transition">{post.ownerName}</h3>
                                        </div>
                                        <div className="textLight text-xs leading-4">
                                            <p> <span className="text-xs textLight">{formattedTime}</span></p>
                                        </div>
                                    </div>
                                </a>
                            </span>
                        </div>
                        <div role="none">
                            <div role="none">
                                <div className="relative ">
                                    <div role="none">
                                        <button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-xs h-6 w-6 bgWhite text-primary border-gray-gray3 hover:bg-gray-gray1 border-0 " type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pl-12">
                        <div>
                            <div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
                                <p>
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full pl-12">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <button title="Upvote" type="button" className="flex items-center text-xs group relative pr-8">
                                <span className="group-hover:bg-greenLighter group-hover:text-green-bright text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform transform group-hover:-translate-y-0.5">
                                        <path d="M10 15.4167V5M10 5L15 10M10 5L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                                <span className="absolute font-semibold text-xs px-1 left-6 textLight">2</span>
                            </button>
                            {/* <button title="Comment" type="button" className="flex items-center text-xs group relative pr-8">
                                <span className="group-hover:bg-blueLight group-hover:text-blue-dark text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33337 16.2197V4.82398C3.33337 4.42865 3.48946 4.04951 3.76729 3.76996C4.04512 3.49042 4.42194 3.33337 4.81486 3.33337H15.1852C15.5781 3.33337 15.955 3.49042 16.2328 3.76996C16.5106 4.04951 16.6667 4.42865 16.6667 4.82398V12.277C16.6667 12.6724 16.5106 13.0515 16.2328 13.331C15.955 13.6106 15.5781 13.7676 15.1852 13.7676H7.00819C6.78614 13.7677 6.56694 13.8179 6.36679 13.9147C6.16664 14.0114 5.99067 14.1522 5.85189 14.3266L4.12523 16.4984C4.06776 16.5709 3.98934 16.6236 3.90081 16.6492C3.81228 16.6749 3.71801 16.6722 3.63105 16.6416C3.54409 16.611 3.46873 16.554 3.4154 16.4784C3.36207 16.4028 3.33341 16.3124 3.33337 16.2197V16.2197Z" stroke="currentColor" strokeWidth="1.5"></path>
                                        <path d="M5.83337 9.99996H14.1667M5.83337 6.66663H10.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:opacity-0 md:group-hover:opacity-100 group-hover:text-blue-dark"></path>
                                    </svg>
                                </span>
                                <span className="absolute font-semibold text-xs px-1 left-6 textLight">0</span>
                            </button>
                            <div role="none">
                                <div className="relative ">
                                    <div role="none">
                                        <button title="Reshare or Repost" type="button" className="flex items-center text-xs group relative pr-8">
                                            <span className="group-hover:bg-orangeLight group-hover:text-orange group-hover:rotate-[30deg] transition-all text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2493 8.4C19.5466 6.79481 18.3897 5.42896 16.9205 4.4698C15.4512 3.51064 13.7334 2.99985 11.9774 3C7.29924 3 3.45113 6.5523 3 11.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M16.4889 8.40002H20.4588C20.5299 8.40002 20.6003 8.38606 20.666 8.35892C20.7317 8.33178 20.7914 8.29201 20.8416 8.24186C20.8919 8.19172 20.9318 8.13219 20.959 8.06667C20.9862 8.00116 21.0002 7.93094 21.0002 7.86002V3.90002M3.75 15.6C5.14308 18.7788 8.32262 21 12.0219 21C16.7009 21 20.5481 17.4477 21.0002 12.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M7.51127 15.6H3.54135C3.39778 15.6 3.26008 15.6569 3.15856 15.7581C3.05704 15.8594 3 15.9968 3 16.14V20.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                            <span className="absolute font-semibold text-xs px-1 left-6 textLight"></span>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div role="none">
                            <div className="relative ">
                                <div role="none">
                                    <button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-inherit  hover:bg-gray-gray2 border-none border-0 bg-transparent group " type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:-rotate-[10deg] transition-all" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <circle cx="6" cy="12" r="3"></circle>
                                            <circle cx="18" cy="6" r="3"></circle>
                                            <circle cx="18" cy="18" r="3"></circle>
                                            <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
                                            <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TextPost