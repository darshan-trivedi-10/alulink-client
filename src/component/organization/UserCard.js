import React from 'react'
import { verifyUser } from '../../api/userApi';

function UserCard({ user, removeUser }) {

    const verify = async (shouldVerify) => {
        console.log(shouldVerify);
        const data = await verifyUser({
            id: user._id,
            verify: false
        })
        if (data.data.data.data === true) {
            removeUser(user._id);
        }
    }

    return (
        <>
            <div className="m-2 w-56  relative flex items-start justify-between flex-1 h-full cursor-pointer group rounded-lg border border-primaryBorder">
                <a className="flex flex-col h-full false" href="/darvishian">
                    <div className="flex flex-col flex-1 p-4">
                        <div>
                            <div className="h-10 mb-2">
                                <div className="h-10 relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bg-white flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white rounded-full" src="https://dqy38fnwh4fqs.cloudfront.net/UHP68KGNM8RAR69HQ7ADLDJED7DK/hp68kgnm8rar69hq7adldjed7dk-profile.webp" alt="" width="40" height="40" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm text-primary font-semibold group-hover:underline">{user.name}</h3>
                        </div>
                        <div>
                            {removeUser &&
                                <div>
                                    <p className="text-gray text-xs paragraph-clamp">Email : {user.email}</p>
                                    <p className="text-gray text-xs paragraph-clamp">Phone Number : {user.phoneNumber}</p>
                                </div>
                            }
                            <p className="text-gray text-xs paragraph-clamp">{user.headline}</p>
                        </div>
                    </div>
                </a>
                {removeUser && <div className="absolute flex flex-col top-4 right-4">
                    <div className="mb-1">
                        <div>
                            <button className="bg-gray-800 border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-gray text-white border-gray-gray9 hover:bg-gray-gray8  " type="button" id="follow-profile" onClick={() => { verify(true) }}>Verify User</button>
                        </div>
                    </div>
                    <div className="mb-1">
                        <div>
                            <button className="bg-gray-800 border font-medium text-center tracking-wide transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded text-xs h-6 px-3 bg-gray text-white border-gray-gray9 hover:bg-gray-gray8  " type="button" id="follow-profile" onClick={() => (verify(false))}>Remove User</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default UserCard;