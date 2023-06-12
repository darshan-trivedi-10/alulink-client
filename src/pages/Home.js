import React from 'react';
import reconnectImg from '../assest/images/reconnect.jpg';
import collegeGroupImg from '../assest/images/college_group.jpg'
import toolsImg from '../assest/images/tools.jpg';
import featureWebP from '../assest/images/feature-5.webp'
import Navbar from '../component/navbar/Navbar.js';
import Footer from '../component/footer/Footer';

const Home = () => {
  return (
    <div className='Home'>
      {/* Navbar */}
      <Navbar />

      {/* Home Page */}
      <div>
        <div className='flex justify-around w-full flex-wrap container-a'>
          <div className='relative flex flex-col items-center justify-center text-5xl container-text'>
            <div>Reconnect with all</div>
            <div>your senior <b>&</b> classmates</div>
            <div>in one convenient place</div>
          </div>

          <div>
            <img src={reconnectImg} alt='student meetup' />
          </div>
        </div>

        <div className='flex-col flex items-center justify-center w-full flex-wrap text-2xl mt-2'>
          <div>The only tool trusted by college alumni and students to connect.</div>
          <div>Find Your College, Now</div>
          <div className="mt-3 relative w-full max-w-md">
            <input
              type="text"
              className="border border-gray-800 rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Find your college / University Group now"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>


        <div className='mt-10 flex justify-around w-full flex-wrap container-a'>
          <div>
            <img src={collegeGroupImg} alt='student meetup' />
          </div>
          <div className='flex flex-col items-center justify-center text-5xl container-text'>
            <div>Create your college</div>
            <div>group in a flash</div>
          </div>

        </div>

        <div className='flex justify-around w-full flex-wrap container-a'>
          <div className='flex flex-col items-center justify-center text-5xl container-text'>
            <div>Save Hours spent on</div>
            <div>managing multiple tools</div>
          </div>

          <div>
            <img className='w-96' src={toolsImg} alt='student meetup' />
          </div>
        </div>


        <div className='mt-10 flex justify-around w-full flex-wrap container-a'>
          <div>
            <img src={featureWebP} alt='student meetup' />
          </div>
          <div className='flex flex-col items-center justify-center text-5xl container-text'>
            <div>Harness the power of</div>
            <div>your alumni community to</div>
            <div>achieve your objectives.</div>
          </div>
        </div>

      </div>

    <Footer></Footer>

    </div >
  );
};

export default Home;
