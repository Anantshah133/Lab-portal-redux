import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCredentials: {
        email: '1',
        password: '1'
    },
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLoggedIn: (state) => {
            state.isLoggedIn = true;
        }
    }
})

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;