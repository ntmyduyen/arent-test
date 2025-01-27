import { createSlice } from "@reduxjs/toolkit";

// mockData
import notify from "@mockData/notify";

const initialState = {
    isLoggedIn: true,
    notify: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getNotify: (state) => {
            state.notify = notify
        }
    }
})

export const {
    getNotify
} = userSlice.actions

export default userSlice.reducer