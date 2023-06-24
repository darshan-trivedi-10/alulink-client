import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../api/userApi';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function People() {

    const organizationId = useSelector((state) => state.organizationReducer.organizationData.data.user._id);
    const [allUser, setAllUser] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const gettingAllUser = async () => {

            const response = await getAllUser({
                id: organizationId,
                page: page
            })
            setAllUser((allUser) => [...allUser, ...response.data.data]);
        }
        gettingAllUser();
    }, [page, organizationId]);

    const updatePage = () => {
        setPage(page + 1);
    }

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='flex flex-wrap justify-center'>
                    {
                        allUser.map((user) => {
                            return <UserCard user={user} />
                        })
                    }

                </div >
            </div>
            <div className='w-full flex justify-center'>
                <button className="bg-gray-800 text-white border-2 mt-6 bg-grey border-gray rounded-2xl w-24 sm:w-32 h-10 sm:h-12 mr-4 sm:mr-8 border-1 transition duration-300 hover:border-gray-600 hover:border-3" onClick={updatePage}>Next</button>
            </div>

        </>
    )
}

export default People