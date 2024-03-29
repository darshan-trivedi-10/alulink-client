import React from "react";
import Navbar from "../../component/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { imageURL } from "../../static/data";
import { updateProfile } from "../../api/userApi";
import { updateUserData } from "../../redux/actions/userActions";

export default function OrganizationProfile() {
  const userData = useSelector((state) => state.userReducer.userData.data);
  const dispatch = useDispatch();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file");
      return;
    }

    const fileExtension = file.name.split(".").pop(); // Get the file extension
    const newFilename = `${userData.user._id}.${fileExtension}`;
    if(fileExtension !== "jpg"){
      alert("We Only Support JPG Format Image");
      return;
    }

    const formData = new FormData();
    formData.append("files", file, newFilename);
    formData.append("id", userData.user._id);

    let response = await updateProfile(formData);
    dispatch(updateUserData(response.data));
    console.log(response);
  };
  console.log(imageURL + userData.user.profile);

  return (
    <>
      <Navbar />

      <div>
        <div className="w-full flex flex-row flexWrap justify-center">
          <div className="lg:mr-32 border-b border-primaryBorder bg-gray-gray0 p-6 flex flex-col text-center border-b border-primaryBorder box-border">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="grid grid-cols-3 w-full">
                <div className="mr-auto maxW-fit"></div>
                <div className="mx-auto drop-shadow-[0px_4px_16px_rgba(33,33,33,0.15)] mb-4 maxW-fit border-2 borderWhite rounded-full">
                  <div className="flex flex-row w-[100px] h-[100px] relative">
                    <div>
                      <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                        {userData.user.profile ? (
                          <img
                            className="w-[100px] h-[100px] rounded-full bg-center bg-no-repeat bg-cover bgWhite flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 borderWhite rounded-full"
                            src={imageURL + userData.user.profile}
                            alt="Update"
                            width="100"
                            height="100"
                          />
                        ) : (
                          <p className="mt-1">
                            Upload Profile
                            <input
                              type="file"
                              id="file"
                              className="opacity-0" // Hide the input element by default
                              onChange={handleFileChange} // Handle file selection event
                            />
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold mb-2">
                {userData.user.name}
              </h1>
              {console.log(userData.user.colleges)}
              <p className="text-base font-normal">
                {userData.user.colleges[0].startYear} -{" "}
                {userData.user.colleges[0].graduationYear}
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 mt-4 mb-4">
              <a
                href={`mailto:${userData.user.email}`}
                rel="noreferrer"
                target="_blank"
                className="mx-4"
              >
                <span className="text-primary font-semibold text-xs  flex items-center text-gray">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_16580_41593)">
                        <path
                          d="M7.45898 4.5L8.77148 3.1875C9.05875 2.90023 9.39979 2.67236 9.77512 2.51689C10.1505 2.36143 10.5527 2.28141 10.959 2.28141C11.3652 2.28141 11.7675 2.36143 12.1429 2.51689C12.5182 2.67236 12.8592 2.90023 13.1465 3.1875C13.4338 3.47477 13.6616 3.8158 13.8171 4.19113C13.9726 4.56647 14.0526 4.96874 14.0526 5.375C14.0526 5.78126 13.9726 6.18354 13.8171 6.55887C13.6616 6.9342 13.4338 7.27523 13.1465 7.5625L11.834 8.875M9.20898 11.5L7.89648 12.8125C7.60922 13.0998 7.26818 13.3276 6.89285 13.4831C6.51752 13.6386 6.11524 13.7186 5.70898 13.7186C4.88851 13.7186 4.10165 13.3927 3.52148 12.8125C2.94132 12.2323 2.61539 11.4455 2.61539 10.625C2.61539 9.80453 2.94132 9.01766 3.52148 8.4375L4.83398 7.125"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.58398 9.75L10.084 6.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_16580_41593">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(1.33398 1)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className="hover:underline cursor-pointer">
                    {userData.user.email}
                  </p>
                </span>
              </a>
            </div>
          </div>
          <div className=" pr-6 flex flex-col justify-between mt-14 align-center h-full">
            <div className="lg:mt-6">
              <div className="flex lg:flex-row flexWrap flex-col items-center lg:py-[10px] group">
                <span className="relative text-white group-hover:text-gray-gray3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
                      fill="currentColor"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.27148 18.346C4.27148 18.346 6.50048 15.5 12.0005 15.5C17.5005 15.5 19.7305 18.346 19.7305 18.346M12.0005 12C12.7961 12 13.5592 11.6839 14.1218 11.1213C14.6844 10.5587 15.0005 9.79565 15.0005 9C15.0005 8.20435 14.6844 7.44129 14.1218 6.87868C13.5592 6.31607 12.7961 6 12.0005 6C11.2048 6 10.4418 6.31607 9.87916 6.87868C9.31655 7.44129 9.00048 8.20435 9.00048 9C9.00048 9.79565 9.31655 10.5587 9.87916 11.1213C10.4418 11.6839 11.2048 12 12.0005 12V12Z"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="lg:text-base text-[10px] lg:capitalize  transition-all lg:group-hover:translate-x-1 uppercase lg:ml-2 mt-2 lg:mt-0 font-normal">
                  {userData.user.headline}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bgWhite w-full border-b border-primaryBorder px-4 sm:px-6 ">
          <ul className="items-center grid grid-cols-1 w-full">
            <li className="border border-primaryBorder">
              <a
                className="text-sm font-medium text-center block py-3 w-full text-primary"
                href="/"
              >
                Your Posts
              </a>
              <div
                style={{ height: "2px" }}
                className=" w-full roundedLg bg-primary"
              ></div>
            </li>
            {/* <li className='border border-primaryBorder'>
              <a className="text-sm font-medium text-center block py-3 w-full text-gray" href="/">
                Jobs Application
              </a>
              <div style={{ height: "2px" }} className=" w-full roundedLg bg-transparent"></div>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
