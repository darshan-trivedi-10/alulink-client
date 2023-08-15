import React from 'react'
import { imageURL } from '../../static/data';

function JobPost({ post }) {

  console.log("post - D ", post);

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


  console.log(post);
  return (
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
                      <img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bgWhite flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 borderWhite rounded-full" src={imageURL + `${post.owner}.jpg`} alt={post.ownerName} width="40" height="40" />
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
                  {/* <button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-xs h-6 w-6 bgWhite text-primary border-gray-gray3 hover:bg-gray-gray1 border-0 " type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pl-12">
          <div>
            <div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
              <p>
                Company Name :  {post.companyName}
              </p>
            </div><div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
              <p>
                Position : {post.jobTitle}
              </p>
            </div>
            <div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
              <p>
                Job Description : {post.description}
              </p>
            </div>
            <div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
              <p>
                Job Link : <a className='text-sky-800' href={post.jobLink} target='_blank'>{post.jobLink}</a>
              </p>
            </div>
            <div className="post-caption text-sky-800 font-normal text-primary breakWords mb-2 bottom-margin-8 ">
              <p>
                <h1>#job #{post.companyName} #opportunity</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 w-full pl-12">
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
      </div> */}
    </article>
  )
}

export default JobPost;