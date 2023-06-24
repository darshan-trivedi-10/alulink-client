import React, { useRef } from 'react'
import { createPost } from '../../api/postApi.js';
import { useSelector } from 'react-redux';

function PostModal(props) {

    const user = useSelector((state) => state.userReducer.userData.data.user);


    const { postModal, setPostModal } = props;
    const postTextRef = useRef(null);

    const createpost = () => {

        if (postTextRef.current) {
            const textValue = postTextRef.current.textContent;
            if (!(textValue === null || textValue === "")) {
                console.log(textValue);
                // owner organization description image [optional]
                const postData = {
                    owner: user._id,
                    organization: user.colleges[0].college,
                    description: textValue
                }

                createPost(postData);


            } else {
                // Please Add Some Text Bhaiii...
            }
        }
    }

    return (
        <>
            {
                postModal && <div aria-hidden="true" id="modal-background-overlay" className="z-[60] text-white w-full h-full bg-g-80  bg-grey fixed inset-0 flex justify-center items-start pt-28 ">
                    <div role="dialog" aria-modal="true" className="w-[640px] mx-1 min-h-min maxW-screen-sm modal-scale-in-content bg-gray-800 text-primary roundedLg z-100">
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
                                    {/* <div className="relative flex items-center">
                                            <ul className="flex items-center border-b border-primaryBorder bg-gray-800 text-sm w-full" style={{ zIndex: "5" }}>
                                                <li className="flex items-center">
                                                    <button className="mx-0 rounded-sm  flex text-center items-center justify-center lg:px-8 px-5 py-2.5 text-sm hover:bg-gray-gray0 transition-all ease-in duration-75 lowercase text-xs font-semibold text-primary border-b-2" type="button">
                                                        #show
                                                    </button>
                                                </li>
                                                <li className="flex items-center">
                                                    <button className="mx-0 rounded-sm flex text-center items-center justify-center lg:px-8 px-5 py-2.5 text-sm hover:bg-gray-gray0 transition-all ease-in duration-75 lowercase text-xs font-medium text-gray border-b-2 border-transparent" type="button">
                                                        #ask
                                                    </button>
                                                </li>
                                                <li className="flex items-center">
                                                    <button className="mx-0 rounded-sm flex text-center items-center justify-center lg:px-8 px-5 py-2.5 text-sm hover:bg-gray-gray0 transition-all ease-in duration-75 lowercase text-xs font-medium text-gray border-b-2 border-transparent" type="button">
                                                        #book
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="absolute right-0 z-[6] flex items-center"><span className="text-xxs textLight font-medium mr-2">480</span></div>
                                        </div> */}
                                    <div role="none" className="h-full max-h-[calc(100vh-20rem)] overflow-y-auto">
                                        <div role="none" className="flex flex-col p-2 roundedLg border border-primaryBorder focusWithin:border-primary relative focusWithin:border-primary border-none px-0 pt-4 h-full hover:cursor-text">
                                            <div className="flex items-center justify-between"></div>
                                            <div className="h-full min-h-[6rem] max-h-[20rem] overflow-y-auto">
                                                <div id="create-a-new-post">
                                                    <div contenteditable="true" translate="no" className="ProseMirror text-sm focus:outline-none h-full min-h-[6rem] max-h-[20rem]" tabIndex="0">
                                                        <p ref={postTextRef} data-placeholder="Share your thoughts, projects, blogs, events and much more." className="is-empty is-editor-empty"><br className="ProseMirror-trailingBreak" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4"></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between py-2 border-t border-primaryBorder">
                                            <div className="flex items-center gap-2">
                                                {/* <button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-sm h-8 w-8  text-primary bg-gray border-gray-gray3 hover:bg-gray-gray1 cursor-pointer " type="button" for="scroll-image" data-tip="true" data-for="add-image" data-effect="solid" currentitem="false">

                                                        <input className='bg-gray' id="scroll-image" type="file" hidden="" disabled="" accept="image/jpg, image/jpeg, image/png, image/gif, image/webp" value="" />
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13 21H3.6C3.44087 21 3.28826 20.9368 3.17574 20.8243C3.06321 20.7117 3 20.5591 3 20.4V3.6C3 3.44087 3.06321 3.28826 3.17574 3.17574C3.28826 3.06321 3.44087 3 3.6 3H20.4C20.5591 3 20.7117 3.06321 20.8243 3.17574C20.9368 3.28826 21 3.44087 21 3.6V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M3 16L10 13L15.5 15.5M16 19H19M22 19H19M19 19V16M19 19V22M16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10V10Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>

                                                    </button> */}

                                                <div className="__react_component_tooltip t20c7c1c4-4392-488a-b216-cc20058e7c33 place-top type-dark" id="add-image" aria-haspopup="true" data-id="tooltip">
                                                    <div className="relative w-fit px-2 py-1 z-10 flex-col items-center text-center justify-center">
                                                        <p className="text-xxs font-normal trackingWider " id="tooltip-text">Add Image</p>
                                                        <div className="absolute tooltip-arrow-down mx-auto -bottom-2 left-1/2 -translate-x-1/2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={createpost} className="flex items-center gap-2 sm:gap-4"><button className="border font-medium text-center trackingWide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-green-bright text-white border-green-dark border-2 hover:bg-green-dark ml-auto " type="button">Post</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default PostModal;