import React from 'react'
import { fakeUserData } from '../api'

import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers'
import DeleteAllUsers from './DeleteAllUsers';

function User() {

    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload)
        dispatch(addUser(payload));
    }

    return (
        <>
        <div className='container-fuild p-5 my-5 text-white'> 
            <div>
                <h2>LIST OF USERS</h2>
                <button className='btn btn-primary' onClick={()=> addNewUser(fakeUserData())}> Add New User</button>
            </div>
            <DisplayUsers />
            <hr/>
            <DeleteAllUsers />
        </div>
        </>
    )
}

export default User