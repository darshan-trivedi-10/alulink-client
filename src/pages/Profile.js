import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

    const user = useSelector((state) => state.organizationReducer);
    console.log("user ", user);
    return (
        <div>Apna College</div>
    )
}
