import { createSlice } from '@reduxjs/toolkit'
import { ClearAllUsers } from '../actions'

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { 
            state.push(action.payload)
        },
        removeUser(state, action) {
            // console.log('hi', action.payload)
            // state.pop(action.payload)
            state.splice(action.payload, 1)
        },
        // deleteUsers(state, action) {
        //     // console.log('hi all');
        //     return [];
        // },
    },
    // extraReducers(builder) {
    //     builder.addCase(userSlice.actions.deleteUsers, () => {
    //         return [];
    //     })
    // }

    extraReducers(builder) {
        builder.addCase(ClearAllUsers, () => {
            return [];
        })
    }

    // extraReducer is used when you need to use that microreducer in every slice.
})


// If action is supposed to be handled by one reducer, use reducers.
// If action is supposed to be handled by multiple reducers, use extraReducers.

console.log(userSlice.actions); // action creators data

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;