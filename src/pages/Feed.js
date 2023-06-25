import React, { useEffect, useState } from 'react'

import Navbar from '../component/navbar/Navbar'
import PostModal from '../component/feed/PostModal';
import TextPost from '../component/feed/TextPost';
import JobPost from '../component/feed/JobPost';

import { fetchAllPost } from '../api/postApi';
import { useSelector } from 'react-redux';

function Feed() {

    const organizationId = useSelector((state) => state.userReducer.userData.data.user.colleges[0].college);
    const [postModal, setPostModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isJobPost, setIsJobPost] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const Postdata = await fetchAllPost({
                id: organizationId,
                page: page
            })
            setPosts((posts) => [...posts, ...Postdata.data.data]);
        }
        fetchPost();
    }, [page])


    return (
        <>
            <Navbar />

            <div className='flex item-center justify-center '>
                <div role="none" className="sm:w-auto md:w-[70vw]lg:w-[40vw] xl:w-[70vw] border-2 border-primaryBorder group bg-gray-gray1 border-b border-primaryBorder px-4 sm:px-6 py-4 hover:cursor-pointer w-[calc(100%-1px)]">

                    <div className='flex flexWrap item-center justify-between'>
                        <div ml-2 className="w-[30vw] flex items-center justify-center gWhite border border-primaryBorder rounded-[56px] p-2 group-hover:shadow-[0px_4px_16px_rgba(33,33,33,0.15)] transition" onClick={() => { setIsJobPost(false); setPostModal(true); }}>
                            <p className='pr-3'>Share Your Story</p>
                            <button >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 21H3.6C3.44087 21 3.28826 20.9368 3.17574 20.8243C3.06321 20.7117 3 20.5591 3 20.4V3.6C3 3.44087 3.06321 3.28826 3.17574 3.17574C3.28826 3.06321 3.44087 3 3.6 3H20.4C20.5591 3 20.7117 3.06321 20.8243 3.17574C20.9368 3.28826 21 3.44087 21 3.6V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 16L10 13L15.5 15.5M16 19H19M22 19H19M19 19V16M19 19V22M16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10V10Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="w-[30vw] flex items-center justify-center bg-gray border border-primaryBorder rounded-[56px] p-2 group-hover:shadow-[0px_4px_16px_rgba(33,33,33,0.15)] transition" onClick={() => { setIsJobPost(true); setPostModal(true); }}>
                            <p className='pr-3'>Post a Job</p>
                            <button className='text-white'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 7.5V5.5C8 4.39543 8.89543 3.5 10 3.5H14C15.1046 3.5 16 4.39543 16 5.5V7.5" fill="currentColor" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3" y="7.5" width="18" height="13" rx="2" fill="currentColor" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M3 13.5C8.66095 16.3526 15.339 16.3526 21 13.5" stroke="#212121" strokeWidth="1.5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {
                        posts.map((post) => {
                            if (post.image) {
                                console.log("image");
                            } else if (post.jobLink) {
                                return <JobPost post={post} />
                            } else {
                                return <TextPost post={post} />
                            }
                        })
                    }

                    <div className='w-full flex justify-center'>
                        <button className="bg-white-800 text-grey border-2 mt-6 bg-grey border-gray rounded-2xl sm:w-40 h-10 sm:h-12 mr-4 sm:mr-8 border-1 transition duration-300 hover:border-gray-600 hover:border-3" onClick={() => { setPage(page + 1) }}>Fetch More Post</button>
                    </div>


                    {/* <div className='mt-5'>
                        <div className="flex items-center justify-between">
                            <div role="none">
                                <span className="maxW-fit">
                                    <a className="flex items-center" href="/iburhan">
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
                                                    <img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bgWhite flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 borderWhite rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/cc1cc514-2576-4c7d-8e29-e83ae0f82eae/Profile.png" alt="Burhan Bharmal" width="40" height="40" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-2">
                                            <div className="flex items-center">
                                                <h3 className="text-sm text-primary font-medium capitalize hover:underline transition">Burhan Bharmal</h3>
                                            </div>
                                            <div className="textLight text-xs leading-4">
                                                <p><span>#ask</span> • <span className="text-xs textLight">1d</span></p>
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
                                <div className="post-caption font-normal text-primary breakWords mb-2 bottom-margin-8 text-sm">
                                    <p>Missing feature on Peerlist. I wish it would be there ☹️</p>
                                    <p>- Dark mode</p>
                                    <p>- I would like to be able to view my own posts.</p>
                                    <p>- The capability to modify published content.</p>
                                    <p>- #hashtag support to filter the posts</p>
                                    <p>- Having trouble with @tagging's not appearing correctly</p>
                                    <p></p>
                                    <p>I understand that this may be a big request, but please let me know if I can assist in any way to make this happen. 💥</p>
                                    <p></p>
                                    <p>If other users find these features necessary, please consider upvoting them. 👍🏻</p>
                                    <p></p>
                                    <p><a data-type="mention" className="mentioned-user font-medium text-green-dark hover:underline breakWords" data-name="Akash Bhadange" href="/designerdada" data-pid="UHDNK79BK6LA89DCMPRQGEGQOGGO">Akash Bhadange</a> <a data-type="mention" className="mentioned-user font-medium text-green-dark hover:underline breakWords" data-name="Yogini Bende" href="/yogini" data-pid="UHA9BO68BL6LRNA2R9MD686DLDGE">Yogini Bende</a> </p>
                                </div>
                            </div>
                            <div className="w-full h-full mt-3">
                                <div role="button" className="maxW-fit">
                                    <img src="https://dqy38fnwh4fqs.cloudfront.net/scroll/61ac8e6d4f451ddc49f9dd4f-1687068730398.webp" alt="Scroll Burhan Bharmal" className="roundedLg h-auto sm:max-h-[500px] border border-primaryBorder object-cover" />
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {/* New Modal */}
                    <PostModal postModal={postModal} isJobPost={isJobPost} setPostModal={setPostModal} />

                </div>
            </div>
        </>
    )
}

export default Feed;