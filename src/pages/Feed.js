import React from 'react'
import Navbar from '../component/navbar/Navbar'

function Feed() {
    return (
        <>
            <Navbar />
            <div className='flex item-center justify-center '>
                <div role="none" className=" w-[60vw] border-2 border-primaryBorder group bg-gray-gray1 border-b border-primaryBorder px-4 sm:px-6 py-4 hover:cursor-pointer w-[calc(100%-1px)]">
                    <div className="flex items-center justify-between bg-white border border-primaryBorder rounded-[56px] p-2 group-hover:shadow-[0px_4px_16px_rgba(33,33,33,0.15)] transition">
                        <div className="flex items-center">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img className="w-8 h-8 rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full" src="https://lh3.googleusercontent.com/a/AGNmyxbYwIkZqPHZZXJ65pDdxtPrP6hD8SwYEeYxQyNqTQ=s96-c?v=1686998399388" alt="" width="32" height="32" />
                                </div>
                            </div>
                            <p className="text-sm text-gray font-normal ml-2">Share a post</p>
                        </div>
                        <button type="button" className="bg-green-lighter text-green-bright group-hover:bg-green-bright group-hover:text-white transition duration-75 rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition duration-200 ease-linear">
                                <path d="M4.16675 10H10.0001M15.8334 10H10.0001M10.0001 10V4.16669M10.0001 10V15.8334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <article role="none" className="bg-white p-4 md:p-8 lg:p-10 lg:px-6 border-b border-primaryBorder hover:bg-gray-gray0 cursor-pointer">
                        <div>
                            <div className="flex items-center justify-between">
                                <div role="none">
                                    <span className="max-w-fit">
                                        <a className="flex items-center" href="/designerdada">
                                            <div className="w-10 h-10 relative">
                                                <div className="w-10 h-10 relative">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-1 bottom-0 outline-none z-1" tabindex="-1">
                                                        <rect width="24" height="24" rx="12" fill="white"></rect>
                                                        <path d="M10.0425 2.74587C10.9935 1.37043 13.0066 1.37043 13.9577 2.74587V2.74587C14.5338 3.57913 15.5638 3.95843 16.5346 3.69483V3.69483C18.137 3.25971 19.6791 4.56895 19.5338 6.24112V6.24112C19.4458 7.25415 19.9939 8.21457 20.905 8.64397V8.64397C22.4089 9.35277 22.7585 11.3586 21.5848 12.5451V12.5451C20.8738 13.2639 20.6835 14.3561 21.1087 15.2775V15.2775C21.8104 16.7986 20.8039 18.5625 19.151 18.7081V18.7081C18.1497 18.7964 17.3101 19.5092 17.0503 20.4916V20.4916C16.6216 22.1132 14.7299 22.8098 13.3712 21.8465V21.8465C12.5481 21.2628 11.452 21.2628 10.6289 21.8465V21.8465C9.27027 22.8098 7.37856 22.1132 6.94981 20.4916V20.4916C6.69007 19.5092 5.85041 18.7964 4.8491 18.7081V18.7081C3.19626 18.5625 2.18971 16.7986 2.89148 15.2775V15.2775C3.31663 14.3561 3.12629 13.2639 2.41529 12.5451V12.5451C1.24166 11.3586 1.59123 9.35277 3.09516 8.64397V8.64397C4.00626 8.21457 4.55431 7.25415 4.46631 6.24112V6.24112C4.32103 4.56895 5.86316 3.25971 7.46555 3.69483V3.69483C8.43629 3.95843 9.46629 3.57913 10.0425 2.74587V2.74587Z" fill="#00AA45" stroke="#fff" stroke-width="1.5"></path>
                                                        <path d="M8 12L10.8571 14.8571L16.5714 9.14285" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_18553_30777" x1="12.0001" y1="1.71429" x2="12.0001" y2="22.2857" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#27AE60"></stop>
                                                                <stop offset="1" stop-color="#1E874B"></stop>
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <div className="w-10 h-10 rounded-full overflow-hidden"><img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/UHDNK79BK6LA89DCMPRQGEGQOGGO/hdnk79bk6la89dcmprqgegqoggo-profile.webp" alt="Akash Bhadange" width="40" height="40" /></div>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <div className="flex items-center">
                                                    <h3 className="text-sm text-primary font-medium capitalize hover:underline transition">Akash Bhadange</h3>
                                                </div>
                                                <div className="text-light text-xs leading-4">
                                                    <p><span>#show</span> • <span className="text-xs text-light">1d</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </span>
                                </div>
                                <div role="none">
                                    <div role="none">
                                        <div className="relative ">
                                            <div role="none">
                                                <button className="border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-xs h-6 w-6 bg-white text-primary border-gray-gray3 hover:bg-gray-gray1 border-0 " type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <desc>Download more icon variants from https://tabler-icons.io/i/dots-vertical</desc>
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
                                    <div className="post-caption font-normal text-primary break-words mb-2 bottom-margin-8 text-sm">
                                        <p>Many of us are upset with Google Domain is shutting down and selling its business to Squarespace. I think they missed a huge opportunity to compete with Cloudflare!</p>
                                        <p>Now I want Cloudflare to offer the maximum number of domain tl;dr.</p>
                                        <p><a target="_blank" rel="noopener noreferrer nofollow" className="text-light rich-link break-all link-break" href="https://9to5google.com/2023/06/15/google-domains-squarespace/">https://9to5google.com/2023/06/15/google-domains-squarespace/</a> </p>
                                    </div>
                                </div>
                                <div className="bg-white border border-primaryBorder overflow-hidden mt-4 transition-shadow ease-in-out duration-200 block  rounded-lg hover:shadow-focus cursor-pointer">
                                    <a href="https://9to5google.com/2023/06/15/google-domains-squarespace/" target="_blank" rel="noreferrer">
                                        <div className="p-0 mob:p-4">
                                            <div className="flex items-start flex-col-reverse w-full mob:flex-row gap-0 mob:gap-4">
                                                <div className="px-4 py-2 mob:px-0 mob:py-0 flex-1">
                                                    <p className="text-primary font-medium text-sm overflow-clip paragraph-clamp">Google Domains shutting down, assets sold and being migrated to Squarespace</p>
                                                    <div className="hidden mob:block break-words">
                                                        <p className="text-light font-normal text-xs paragraph-clamp mb-1">Google Domains is "winding down following a transition period," with Squarespace taking over the business and assets...</p>
                                                    </div>
                                                    <div className="flex items-center text-xxs font-normal text-light mt-2"><img src="https://www.google.com/s2/favicons?domain=https://9to5google.com&amp;sz=128" width="14" height="14" alt="" className="w-[14px] h-auto mr-1 rounded-full" />9to5google.com</div>
                                                </div>
                                                <img src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/03/google-domains-cover.jpeg?resize=1200%2C628&amp;quality=82&amp;strip=all&amp;ssl=1" alt="Google Domains shutting down, assets sold and being migrated to Squarespace" className="w-full object-cover w-full mob:w-[135px] mob:h-[72px] object-cover mob:rounded-lg border-b mob:border border-primaryBorder" />
                                            </div>
                                            <div className="mt-4 mx-4 mb-4 mob:mx-0 mob:mb-0">
                                                <div className="pt-4 border-t border-primaryBorder">
                                                    <div className="border-l-2 border-green-bright px-2">
                                                        <div className="flex items-center justify-between w-full">
                                                            <p data-tip="true" data-for="tldr-info" data-effect="solid" className="text-light font-semibold text-xxs mb-2 flex items-center gap-1" currentitem="false">
                                                                TL;DR by
                                                                <svg width="47" height="10" viewBox="0 0 47 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.16137 3.94841C8.16137 4.5216 8.01367 5.01763 7.71825 5.43651C7.42725 5.85538 7.01278 6.17945 6.47487 6.40873C5.94136 6.638 5.31084 6.75264 4.58333 6.75264C4.09832 6.75264 3.6552 6.70194 3.25397 6.60053C2.85273 6.49912 2.5022 6.35582 2.20238 6.17063L2.29497 5.58201C2.4537 5.69224 2.62566 5.78483 2.81085 5.85979C2.99603 5.93033 3.19224 5.98545 3.39947 6.02513C3.6067 6.0604 3.82275 6.07804 4.04762 6.07804C4.45326 6.07804 4.81481 5.99427 5.13227 5.82672C5.44973 5.65917 5.69885 5.41226 5.87963 5.08598C6.0604 4.7597 6.15079 4.36287 6.15079 3.8955C6.15079 3.35317 6.04277 2.8836 5.82672 2.48677C5.61508 2.08995 5.31525 1.7813 4.92725 1.56085C4.53924 1.34039 4.08289 1.23016 3.5582 1.23016H3.03571V8.73015C3.03571 8.82716 3.06217 8.91093 3.11508 8.98148C3.16799 9.04762 3.25176 9.0895 3.3664 9.10714L3.9418 9.1865C4.05203 9.20855 4.13139 9.24603 4.17989 9.29894C4.22839 9.35185 4.25264 9.42901 4.25264 9.53042C4.25264 9.62301 4.21957 9.69797 4.15344 9.75529C4.09171 9.8082 3.9925 9.83465 3.85582 9.83465H0.403439C0.266755 9.83465 0.165344 9.8082 0.0992063 9.75529C0.0330688 9.69797 0 9.62301 0 9.53042C0 9.36287 0.0925926 9.25044 0.277778 9.19312L0.661375 9.10714C0.767196 9.07628 0.846561 9.02998 0.899471 8.96825C0.95679 8.90652 0.985449 8.82716 0.985449 8.73015V1.67989C0.985449 1.58289 0.95679 1.50353 0.899471 1.4418C0.846561 1.38007 0.767196 1.33377 0.661375 1.30291L0.277778 1.21693C0.0925926 1.15961 0 1.04718 0 0.879629C0 0.782628 0.0330688 0.707672 0.0992063 0.654762C0.165344 0.601852 0.266755 0.575397 0.403439 0.575397H3.61111C4.57231 0.575397 5.39241 0.720899 6.07143 1.0119C6.75044 1.2985 7.26852 1.69753 7.62566 2.20899C7.9828 2.71605 8.16137 3.29585 8.16137 3.94841Z" fill="#6A737D"></path>
                                                                    <path d="M14.548 5.92592C14.548 6.15961 14.4818 6.34039 14.3496 6.46825C14.2173 6.59171 14.0233 6.65344 13.7676 6.65344H9.64058V6.15079H12.3456C12.5705 6.15079 12.6829 6.04938 12.6829 5.84656C12.6829 5.26455 12.5771 4.82363 12.3654 4.52381C12.1538 4.21958 11.8694 4.06746 11.5123 4.06746C11.2389 4.06746 10.9964 4.15123 10.7848 4.31878C10.5731 4.48633 10.4078 4.72663 10.2887 5.03968C10.1697 5.34832 10.1102 5.7231 10.1102 6.16402C10.1102 7.01499 10.3086 7.65432 10.7054 8.08201C11.1066 8.5097 11.6401 8.72354 12.3059 8.72354C12.6939 8.72354 13.0334 8.64638 13.3244 8.49206C13.6199 8.33774 13.8491 8.11728 14.0123 7.83069C14.0916 7.7425 14.1534 7.68298 14.1975 7.65211C14.246 7.62125 14.2945 7.60582 14.343 7.60582C14.4135 7.60582 14.4642 7.63889 14.4951 7.70502C14.5259 7.76675 14.5414 7.84171 14.5414 7.92989C14.5237 8.30026 14.3915 8.64418 14.1445 8.96164C13.8976 9.27469 13.5647 9.52601 13.1459 9.7156C12.727 9.9052 12.2464 10 11.7041 10C11.0647 10 10.4982 9.86993 10.0043 9.60979C9.51051 9.34523 9.1225 8.97707 8.84032 8.50529C8.56254 8.0291 8.42365 7.47354 8.42365 6.83862C8.42365 6.17284 8.55592 5.58201 8.82047 5.06614C9.08943 4.55026 9.47303 4.14682 9.97127 3.85582C10.4695 3.56481 11.0647 3.41931 11.757 3.41931C12.3478 3.41931 12.8505 3.52734 13.2649 3.74338C13.6838 3.95503 14.0012 4.25044 14.2173 4.62963C14.4378 5.00441 14.548 5.43651 14.548 5.92592Z" fill="#6A737D"></path>
                                                                    <path d="M21.3364 5.92592C21.3364 6.15961 21.2702 6.34039 21.138 6.46825C21.0057 6.59171 20.8117 6.65344 20.556 6.65344H16.429V6.15079H19.134C19.3589 6.15079 19.4713 6.04938 19.4713 5.84656C19.4713 5.26455 19.3655 4.82363 19.1538 4.52381C18.9422 4.21958 18.6578 4.06746 18.3007 4.06746C18.0273 4.06746 17.7848 4.15123 17.5732 4.31878C17.3615 4.48633 17.1962 4.72663 17.0771 5.03968C16.9581 5.34832 16.8986 5.7231 16.8986 6.16402C16.8986 7.01499 17.097 7.65432 17.4938 8.08201C17.895 8.5097 18.4285 8.72354 19.0943 8.72354C19.4823 8.72354 19.8218 8.64638 20.1128 8.49206C20.4083 8.33774 20.6375 8.11728 20.8007 7.83069C20.88 7.7425 20.9418 7.68298 20.9859 7.65211C21.0344 7.62125 21.0829 7.60582 21.1314 7.60582C21.2019 7.60582 21.2526 7.63889 21.2835 7.70502C21.3143 7.76675 21.3298 7.84171 21.3298 7.92989C21.3121 8.30026 21.1799 8.64418 20.9329 8.96164C20.686 9.27469 20.3531 9.52601 19.9343 9.7156C19.5154 9.9052 19.0348 10 18.4925 10C17.8531 10 17.2866 9.86993 16.7927 9.60979C16.2989 9.34523 15.9109 8.97707 15.6287 8.50529C15.3509 8.0291 15.212 7.47354 15.212 6.83862C15.212 6.17284 15.3443 5.58201 15.6089 5.06614C15.8778 4.55026 16.2614 4.14682 16.7597 3.85582C17.2579 3.56481 17.8531 3.41931 18.5454 3.41931C19.1362 3.41931 19.6389 3.52734 20.0533 3.74338C20.4722 3.95503 20.7896 4.25044 21.0057 4.62963C21.2262 5.00441 21.3364 5.43651 21.3364 5.92592Z" fill="#6A737D"></path>
                                                                    <path d="M24.4211 6.32936C24.4211 5.69003 24.5115 5.15432 24.6922 4.72222C24.873 4.29012 25.1111 3.96605 25.4065 3.75C25.7019 3.52954 26.0194 3.41931 26.3589 3.41931C26.7778 3.41931 27.1019 3.53836 27.3311 3.77645C27.5604 4.01455 27.675 4.35626 27.675 4.80159C27.675 5.19841 27.5935 5.49383 27.4303 5.68783C27.2672 5.88183 27.0556 5.97883 26.7954 5.97883C26.5309 5.97883 26.3303 5.90829 26.1936 5.76719C26.0569 5.6261 25.9885 5.42989 25.9885 5.17857V4.94047C25.9841 4.79938 25.9511 4.69577 25.8893 4.62963C25.8276 4.55908 25.7262 4.52381 25.5851 4.52381C25.4308 4.52381 25.2809 4.58774 25.1354 4.71561C24.9943 4.84347 24.8774 5.03748 24.7848 5.29762C24.6967 5.55776 24.6526 5.89065 24.6526 6.29629L24.4211 6.32936ZM24.5467 3.87566L24.6526 5.37698V8.76984C24.6526 8.8977 24.6768 8.9925 24.7253 9.05423C24.7782 9.11155 24.8708 9.15123 25.0031 9.17328L25.5719 9.25926C25.6733 9.27689 25.7482 9.30996 25.7967 9.35846C25.8496 9.40696 25.8761 9.4731 25.8761 9.55687C25.8761 9.64506 25.843 9.7134 25.7769 9.7619C25.7152 9.8104 25.6248 9.83465 25.5057 9.83465H22.4171C22.2937 9.83465 22.2033 9.8104 22.1459 9.7619C22.0886 9.7134 22.06 9.64726 22.06 9.56349C22.06 9.49735 22.0798 9.44224 22.1195 9.39814C22.1592 9.34964 22.2209 9.30996 22.3047 9.2791L22.5626 9.21296C22.642 9.18651 22.6993 9.14241 22.7346 9.08068C22.7743 9.01455 22.7941 8.91314 22.7941 8.77645V5C22.7941 4.88536 22.7765 4.80379 22.7412 4.75529C22.7103 4.70679 22.6574 4.67592 22.5825 4.6627L22.2319 4.63624C22.1526 4.61861 22.0952 4.58995 22.06 4.55026C22.0247 4.51058 22.0071 4.45988 22.0071 4.39815C22.0071 4.32319 22.0291 4.26367 22.0732 4.21958C22.1173 4.17548 22.1967 4.13139 22.3113 4.0873L23.515 3.65079C23.731 3.56702 23.8898 3.51411 23.9912 3.49206C24.0926 3.46561 24.172 3.45238 24.2293 3.45238C24.3263 3.45238 24.399 3.48545 24.4475 3.55159C24.496 3.61331 24.5291 3.72134 24.5467 3.87566Z" fill="#6A737D"></path>
                                                                    <path d="M30.7242 0.42328V8.77645C30.7242 8.91314 30.7418 9.01455 30.7771 9.08068C30.8168 9.14241 30.8763 9.18651 30.9557 9.21296L31.207 9.2791C31.2908 9.30555 31.3525 9.34303 31.3922 9.39153C31.4319 9.43562 31.4517 9.49294 31.4517 9.56349C31.4517 9.64726 31.423 9.7134 31.3657 9.7619C31.3084 9.8104 31.2158 9.83465 31.0879 9.83465H28.4821C28.3587 9.83465 28.2683 9.8104 28.211 9.7619C28.1536 9.7134 28.125 9.64726 28.125 9.56349C28.125 9.49735 28.1448 9.44224 28.1845 9.39814C28.2242 9.34964 28.2859 9.30996 28.3697 9.2791L28.6276 9.21296C28.707 9.1821 28.7643 9.1358 28.7996 9.07407C28.8393 9.01234 28.8591 8.91314 28.8591 8.77645V1.53439C28.8591 1.42416 28.8415 1.3448 28.8062 1.2963C28.7753 1.2478 28.7224 1.21693 28.6475 1.2037L28.2969 1.17725C28.2176 1.1552 28.1603 1.12434 28.125 1.08466C28.0897 1.04497 28.0721 0.994268 28.0721 0.93254C28.0721 0.861993 28.0941 0.804673 28.1382 0.760582C28.1823 0.71649 28.2617 0.672398 28.3763 0.628307L29.6065 0.178572C29.7828 0.112434 29.9217 0.066138 30.0231 0.0396828C30.1245 0.0132276 30.2127 0 30.2877 0C30.4332 0 30.5412 0.0396825 30.6118 0.119048C30.6867 0.194004 30.7242 0.295415 30.7242 0.42328Z" fill="#6A737D"></path>
                                                                    <path d="M34.6837 3.86905V8.77645C34.6837 8.91314 34.7013 9.01455 34.7366 9.08068C34.7763 9.14241 34.8358 9.18651 34.9151 9.21296L35.1665 9.2791C35.2502 9.30555 35.312 9.34303 35.3517 9.39153C35.3913 9.43562 35.4112 9.49294 35.4112 9.56349C35.4112 9.64726 35.3825 9.7134 35.3252 9.7619C35.2679 9.8104 35.1753 9.83465 35.0474 9.83465H32.4416C32.3181 9.83465 32.2278 9.8104 32.1704 9.7619C32.1131 9.7134 32.0845 9.64726 32.0845 9.56349C32.0845 9.49735 32.1043 9.44224 32.144 9.39814C32.1837 9.34964 32.2454 9.30996 32.3292 9.2791L32.5871 9.21296C32.6665 9.1821 32.7238 9.1358 32.7591 9.07407C32.7987 9.01234 32.8186 8.91314 32.8186 8.77645V4.98677C32.8186 4.87213 32.8009 4.79056 32.7657 4.74206C32.7348 4.69356 32.6819 4.6627 32.6069 4.64947L32.2564 4.62301C32.1771 4.60538 32.1197 4.57672 32.0845 4.53704C32.0492 4.49735 32.0315 4.44665 32.0315 4.38492C32.0315 4.30996 32.0514 4.25044 32.0911 4.20635C32.1352 4.16226 32.2167 4.11816 32.3358 4.07407L33.5659 3.62434C33.7379 3.56261 33.8746 3.51852 33.976 3.49206C34.0818 3.46561 34.17 3.45238 34.2405 3.45238C34.3905 3.45238 34.5007 3.49206 34.5712 3.57143C34.6462 3.64638 34.6837 3.74559 34.6837 3.86905ZM33.6056 2.44048C33.2529 2.44048 32.9685 2.35009 32.7524 2.16931C32.5408 1.98413 32.435 1.74383 32.435 1.44841C32.435 1.153 32.5408 0.917107 32.7524 0.74074C32.9685 0.559965 33.2529 0.469577 33.6056 0.469577C33.9628 0.469577 34.2472 0.559965 34.4588 0.74074C34.6748 0.917107 34.7829 1.153 34.7829 1.44841C34.7829 1.74383 34.6748 1.98413 34.4588 2.16931C34.2472 2.35009 33.9628 2.44048 33.6056 2.44048Z" fill="#6A737D"></path>
                                                                    <path d="M38.6041 4.01455C38.2998 4.01455 38.0617 4.09171 37.8898 4.24603C37.7222 4.39594 37.6385 4.58774 37.6385 4.82143C37.6385 4.96693 37.6693 5.0992 37.7311 5.21825C37.7972 5.33289 37.9206 5.43871 38.1014 5.53571C38.2822 5.63271 38.5467 5.7231 38.8951 5.80688C39.5741 5.94797 40.0988 6.12434 40.4692 6.33598C40.8395 6.54762 41.0975 6.79233 41.243 7.0701C41.3885 7.34347 41.4612 7.64991 41.4612 7.98942C41.4612 8.60229 41.2452 9.09171 40.8131 9.45767C40.381 9.81922 39.7527 10 38.9281 10C38.6371 10 38.399 9.97354 38.2139 9.92063C38.0287 9.87213 37.8766 9.82363 37.7575 9.77513C37.6385 9.72222 37.5326 9.69576 37.44 9.69576C37.3475 9.69576 37.2703 9.72222 37.2086 9.77513C37.1512 9.82363 37.0961 9.87213 37.0432 9.92063C36.9903 9.97354 36.9198 10 36.8316 10C36.7522 10 36.6927 9.97795 36.653 9.93386C36.6133 9.88977 36.5759 9.8082 36.5406 9.68915L36.1041 8.35979C36.0556 8.20546 36.0401 8.0798 36.0578 7.9828C36.0798 7.8858 36.1393 7.81746 36.2363 7.77778C36.3378 7.7425 36.4259 7.74471 36.5009 7.78439C36.5759 7.81966 36.6464 7.888 36.7125 7.98942C36.9109 8.33333 37.1226 8.6089 37.3475 8.81613C37.5723 9.01896 37.8082 9.16666 38.0551 9.25926C38.3064 9.35185 38.5622 9.39814 38.8223 9.39814C39.2015 9.39814 39.4837 9.32098 39.6689 9.16666C39.8585 9.01234 39.9533 8.80732 39.9533 8.55158C39.9533 8.39726 39.9136 8.25838 39.8342 8.13492C39.7549 8.00705 39.6072 7.89241 39.3911 7.791C39.1751 7.68518 38.862 7.58598 38.452 7.49338C37.8832 7.36993 37.429 7.2112 37.0895 7.01719C36.7544 6.81878 36.5119 6.58069 36.362 6.30291C36.2165 6.02513 36.1438 5.70326 36.1438 5.3373C36.1438 4.9537 36.243 4.61861 36.4414 4.33201C36.6398 4.04541 36.9154 3.82275 37.2681 3.66402C37.6208 3.50088 38.0287 3.41931 38.4916 3.41931C38.7915 3.41931 39.0318 3.44577 39.2125 3.49868C39.3933 3.55159 39.541 3.6067 39.6557 3.66402C39.7747 3.71693 39.8827 3.74338 39.9797 3.74338C40.0855 3.74338 40.1693 3.71693 40.2311 3.66402C40.2928 3.6067 40.3523 3.55159 40.4096 3.49868C40.4669 3.44577 40.5375 3.41931 40.6213 3.41931C40.6874 3.41931 40.7425 3.44356 40.7866 3.49206C40.8351 3.53615 40.8704 3.61552 40.8924 3.73016L41.2165 4.99338C41.2474 5.15652 41.254 5.28439 41.2363 5.37698C41.2231 5.46957 41.1658 5.53571 41.0644 5.57539C40.9674 5.61508 40.8814 5.61067 40.8064 5.56217C40.7315 5.51367 40.6565 5.42769 40.5816 5.30423C40.3082 4.83686 39.9974 4.50617 39.649 4.31217C39.3051 4.11376 38.9568 4.01455 38.6041 4.01455Z" fill="#6A737D"></path>
                                                                    <path d="M42.5231 4.21958L42.2189 4.12698C42.1131 4.09171 42.0381 4.05203 41.994 4.00794C41.9499 3.95943 41.9279 3.90432 41.9279 3.84259C41.9279 3.75441 41.9566 3.68827 42.0139 3.64418C42.0756 3.59568 42.1572 3.57143 42.2586 3.57143H42.662C42.7678 3.57143 42.856 3.55159 42.9266 3.5119C42.9971 3.47222 43.0699 3.40167 43.1448 3.30026L43.8657 2.28836C43.9583 2.17372 44.0465 2.08995 44.1303 2.03704C44.214 1.98413 44.2978 1.95767 44.3816 1.95767C44.4742 1.95767 44.5469 1.98633 44.5998 2.04365C44.6528 2.10097 44.6792 2.18474 44.6792 2.29497V7.94973C44.6792 8.25838 44.7387 8.49427 44.8578 8.6574C44.9812 8.82054 45.151 8.90211 45.367 8.90211C45.5302 8.90211 45.6558 8.87125 45.744 8.80952C45.8366 8.74338 45.9094 8.66843 45.9623 8.58465C46.0152 8.50088 46.0659 8.42813 46.1144 8.3664C46.1673 8.30026 46.2334 8.26499 46.3128 8.26058C46.3789 8.26058 46.4297 8.28263 46.4649 8.32672C46.5046 8.37081 46.5244 8.44356 46.5244 8.54497C46.52 8.79629 46.4363 9.02998 46.2731 9.24603C46.1144 9.46208 45.8917 9.63844 45.6051 9.77513C45.3185 9.9074 44.9923 9.97354 44.6263 9.97354C44.0619 9.97354 43.6188 9.83245 43.2969 9.55026C42.9795 9.26367 42.8207 8.83377 42.8207 8.26058V4.60979C42.8207 4.49515 42.7965 4.41137 42.748 4.35846C42.7039 4.30115 42.6289 4.25485 42.5231 4.21958ZM43.9451 4.22619V3.57143H46.1342C46.2356 3.57143 46.315 3.59347 46.3723 3.63757C46.4341 3.67725 46.4649 3.73677 46.4649 3.81614C46.4649 3.93077 46.4076 4.02778 46.293 4.10714C46.1783 4.18651 45.9931 4.22619 45.7374 4.22619H43.9451Z" fill="#6A737D"></path>
                                                                </svg>
                                                            </p>
                                                            <div className="__react_component_tooltip t2bb7b15a-3d94-4b75-87c7-04a949656968 place-top type-dark" id="tldr-info" aria-haspopup="true" data-id="tooltip">
                                                                <div className="relative w-fit px-2 py-1 z-10 flex-col items-center text-center justify-center">
                                                                    <p className="text-xxs font-normal tracking-wider " id="tooltip-text">Result may not be always accurate.</p>
                                                                    <div className="absolute tooltip-arrow-down mx-auto -bottom-2 left-1/2 -translate-x-1/2"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <blockquote className="text-xs text-primary">
                                                            Google has announced a new partnership with Squarespace to allow customers to purchase and manage their domains through the Google Domains website. Squarespace will be the exclusive provider of website-creation services for Google Domains.
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-full pl-12">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-6">
                                    <button title="Upvote" type="button" className="flex items-center text-xs group relative pr-8">
                                        <span className="group-hover:bg-green-lighter group-hover:text-green-bright text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform transform group-hover:-translate-y-0.5">
                                                <path d="M10 15.4167V5M10 5L15 10M10 5L5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute font-semibold text-xs px-1 left-6 text-light">3</span>
                                    </button>
                                    <button title="Comment" type="button" className="flex items-center text-xs group relative pr-8">
                                        <span className="group-hover:bg-blue-light group-hover:text-blue-dark text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.33337 16.2197V4.82398C3.33337 4.42865 3.48946 4.04951 3.76729 3.76996C4.04512 3.49042 4.42194 3.33337 4.81486 3.33337H15.1852C15.5781 3.33337 15.955 3.49042 16.2328 3.76996C16.5106 4.04951 16.6667 4.42865 16.6667 4.82398V12.277C16.6667 12.6724 16.5106 13.0515 16.2328 13.331C15.955 13.6106 15.5781 13.7676 15.1852 13.7676H7.00819C6.78614 13.7677 6.56694 13.8179 6.36679 13.9147C6.16664 14.0114 5.99067 14.1522 5.85189 14.3266L4.12523 16.4984C4.06776 16.5709 3.98934 16.6236 3.90081 16.6492C3.81228 16.6749 3.71801 16.6722 3.63105 16.6416C3.54409 16.611 3.46873 16.554 3.4154 16.4784C3.36207 16.4028 3.33341 16.3124 3.33337 16.2197V16.2197Z" stroke="currentColor" stroke-width="1.5"></path>
                                                <path d="M5.83337 9.99996H14.1667M5.83337 6.66663H10.8334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="md:opacity-0 md:group-hover:opacity-100 group-hover:text-blue-dark"></path>
                                            </svg>
                                        </span>
                                        <span className="absolute font-semibold text-xs px-1 left-6 text-light">0</span>
                                    </button>
                                    <div role="none">
                                        <div className="relative ">
                                            <div role="none">
                                                <button title="Reshare or Repost" type="button" className="flex items-center text-xs group relative pr-8">
                                                    <span className="group-hover:bg-orange-light group-hover:text-orange group-hover:rotate-[30deg] transition-all text-primary flex items-center justify-center rounded-full -ml-2 h-8 w-8">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M20.2493 8.4C19.5466 6.79481 18.3897 5.42896 16.9205 4.4698C15.4512 3.51064 13.7334 2.99985 11.9774 3C7.29924 3 3.45113 6.5523 3 11.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M16.4889 8.40002H20.4588C20.5299 8.40002 20.6003 8.38606 20.666 8.35892C20.7317 8.33178 20.7914 8.29201 20.8416 8.24186C20.8919 8.19172 20.9318 8.13219 20.959 8.06667C20.9862 8.00116 21.0002 7.93094 21.0002 7.86002V3.90002M3.75 15.6C5.14308 18.7788 8.32262 21 12.0219 21C16.7009 21 20.5481 17.4477 21.0002 12.9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M7.51127 15.6H3.54135C3.39778 15.6 3.26008 15.6569 3.15856 15.7581C3.05704 15.8594 3 15.9968 3 16.14V20.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="absolute font-semibold text-xs px-1 left-6 text-light"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="none">
                                    <div className="relative ">
                                        <div role="none">
                                            <button className="border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-inherit  hover:bg-gray-gray2 border-none border-0 bg-transparent group " type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:-rotate-[10deg] transition-all" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <desc>Download more icon variants from https://tabler-icons.io/i/share</desc>
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
                </div>
            </div>
        </>
    )
}

export default Feed;