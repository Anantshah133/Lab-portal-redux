import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import studentsReducer from "./features/students/studentsSlice";
import computerReducer from "./features/computers/computersSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        students: studentsReducer,
        computers: computerReducer,
    }
})