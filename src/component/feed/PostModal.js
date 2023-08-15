import React, { useRef, useState } from 'react'
import { createPost } from '../../api/postApi.js';
import { useSelector } from 'react-redux';

function PostModal(props) {

    const user = useSelector((state) => state.userReducer.userData.data.user);


    const { postModal, setPostModal, isJobPost } = props;
    const postTextRef = useRef(null);

    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [openingLink, setOpeningLink] = useState('');
    const [jobDesc, setJobDesc] = useState('');

    const handlePostClick = () => {
        // Process the data here or perform any desired actions


        const jobPost = {
            "ownerName": user.name,
            "owner": user._id,
            "organization": user.colleges[0].college,
            "companyName": companyName,
            "jobTitle": jobTitle,
            "jobLink": openingLink,
            "description": jobDesc
        }

        createPost(jobPost);
        setPostModal(false);
    };


    const createpost = () => {

        if (postTextRef.current) {
            const textValue = postTextRef.current.textContent;
            if (!(textValue === null || textValue === "")) {
                // owner organization description image [optional]
                const postData = {
                    ownerName: user.name,
                    owner: user._id,
                    organization: user.colleges[0].college,
                    description: textValue,
                }

                createPost(postData);
                setPostModal(false);

            } else {
                // Please Add Some error Text Bhaiii...
            }
        }
    }

    return (
        <>
            {
                postModal && <div aria-hidden="true" id="modal-background-overlay" className="z-[60] text-white w-full h-full bg-g-80  bg-grey fixed inset-0 flex justify-center items-start pt-28 ">
                    <div role="dialog" aria-modal="true" className="w-[800px] h-[400px] rounded-xl mx-1 min-h-min maxW-screen-sm modal-scale-in-content bg-gray-800 text-primary roundedLg z-100">
                        {
                            !isJobPost && <div>

                                <div className="flex items-center justify-between border-b border-gray-gray2 py-2 px-4">
                                    <p className="text-primary font-semibold text-sm ">Create Post</p>
                                    <button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-inherit  hover:bg-gray-gray2 border-none" type="button" onClick={() => { setPostModal(!postModal) }}>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <desc>Download more icon variants from https://tabler-icons.io/i/x</desc>
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>

                                    </button>
                                </div>
                                <div className="w-full bg-gray-800">
                                    <div className="w-full px-4  ">
                                        <div id="create-post-modal" className="border-b border-primaryBorder rounded-md">
                                            <div role="none" className="h-full max-h-[calc(100vh-20rem)] overflow-y-auto">
                                                <div role="none" className="flex flex-col p-2 roundedLg border border-primaryBorder focusWithin:border-primary relative focusWithin:border-primary border-none px-0 pt-4 h-full hover:cursor-text">
                                                    <div className="flex items-center justify-between"></div>
                                                    <div className="h-full min-h-[6rem] max-h-[20rem] overflow-y-auto">
                                                        <div id="create-a-new-post">
                                                            <div contentEditable="true" translate="no" className="ProseMirror text-sm focus:outline-none h-full min-h-[6rem] max-h-[20rem]" tabIndex="0">
                                                                <p ref={postTextRef} data-placeholder="Share your thoughts, projects, blogs, events and much more." className="is-empty is-editor-empty"><br className="ProseMirror-trailingBreak" /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4"></div>
                                            </div>
                                            <div>
                                                <div className="mt-[150px] flex items-center justify-between py-2 border-t border-primaryBorder">
                                                    <div className="flex items-center gap-2">
                                                        <div className="__react_component_tooltip t20c7c1c4-4392-488a-b216-cc20058e7c33 place-top type-dark" id="add-image" aria-haspopup="true" data-id="tooltip">
                                                            {/* <div className="relative w-fit px-2 py-1 z-10 flex-col items-center text-center justify-center">
                                                                <p className="text-xxs font-normal trackingWider " id="tooltip-text">Add Image</p>
                                                                <div className="absolute tooltip-arrow-down mx-auto -bottom-2 left-1/2 -translate-x-1/2"></div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div onClick={createpost} className="flex items-center gap-2 sm:gap-4"><button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-green-bright text-white border-green-dark border-2 hover:bg-green-dark ml-auto " type="button">Post</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }


                        {/* For Job Posting */}

                        {isJobPost &&
                            <div>
                                <div className="flex items-center justify-between border-b border-gray-gray2 py-2 px-4">
                                    <p className="text-primary font-semibold text-sm">Create Job Post</p>
                                    <button
                                        className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8 text-primary bg-inherit  hover:bg-gray-gray2 border-none"
                                        type="button"
                                        onClick={handlePostClick}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-x"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <desc>Download more icon variants from https://tabler-icons.io/i/x</desc>
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full bg-gray-800">
                                    <div className="w-full px-4">
                                        <div id="create-post-modal" className="border-b border-primaryBorder rounded-md">
                                            <div role="none" className="h-full max-h-[calc(100vh-20rem)] overflow-y-auto">
                                                <div role="none" className="flex flex-col p-2 roundedLg border border-primaryBorder focusWithin:border-primary relative focusWithin:border-primary border-none px-0 pt-4 h-full hover:cursor-text">
                                                    <div className="flex items-center justify-between"></div>
                                                    <div className="h-full min-h-[6rem] max-h-[20rem] overflow-y-auto">
                                                        <div id="create-a-new-post">
                                                            <div
                                                                translate="no"
                                                                className="ProseMirror text-sm focus:outline-none h-full min-h-[6rem] max-h-[20rem]"
                                                                tabIndex="0"
                                                            >
                                                                <div className="flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                                                                    <div className="mb-6">
                                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                            Company Name:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="name"
                                                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                                            required
                                                                            value={companyName}
                                                                            onChange={(e) => setCompanyName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="mb-6">
                                                                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                            Job Title:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="location"
                                                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                                            required
                                                                            value={jobTitle}
                                                                            onChange={(e) => setJobTitle(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="mb-6">
                                                                        <label htmlFor="established" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                            Opening Link:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="established"
                                                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                                            required
                                                                            value={openingLink}
                                                                            onChange={(e) => setOpeningLink(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-6">
                                                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description : </label>
                                                                    <textarea value={jobDesc} onChange={(e) => { setJobDesc(e.target.value) }} id="description" rows="4" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mt-[150px] flex items-center justify-between py-2 border-primaryBorder">
                                                    <div className="flex items-center gap-2"></div>
                                                    <div onClick={handlePostClick} className="flex items-center gap-2 sm:gap-4">
                                                        <button
                                                            className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-green-bright text-white border-green-dark border-2 hover:bg-green-dark ml-auto"
                                                            type="button"
                                                        >
                                                            Post
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            }
        </>
    )
}

export default PostModal;