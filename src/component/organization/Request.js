import React, { useEffect, useState } from 'react';
import { getUnverifiedUser } from '../../api/userApi';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function Request() {
    const [unverifiedUser, setUnverifiedUser] = useState([]);
    const organizationId = useSelector((state) => state.organizationReducer.organizationData.data.user._id);

    useEffect(() => {
        const fetchUnverifiedUser = async () => {
            try {
                const response = await getUnverifiedUser({
                    id: organizationId
                });
                setUnverifiedUser(response.data.data);
            } catch (error) {
                console.error('Error fetching unverified user:', error);
            }
        };

        fetchUnverifiedUser();
    }, [organizationId]);

    const removeUser = (id) => {
        let all_user = unverifiedUser.filter(user => user._id !== id);
        setUnverifiedUser(all_user);
    }

    return (
        <div className='w-full flex-row flex justify-center'>
            <div className='flex flex-wrap justify-center'>
                {
                    unverifiedUser.map((user) => (
                        <UserCard user={user} removeUser={removeUser} />
                    ))
                }
            </div>
        </div>
    );
}

export default Request;
