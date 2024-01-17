import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCredentials: {
        email: 'anantshah@gmail.com',
        password: 'Anant@123'
    },
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLoggedIn: (state, payload) => {
            console.log(payload)
            state.isLoggedIn = payload.payload;
        }
    }
})

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;