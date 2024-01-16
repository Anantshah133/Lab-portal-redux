import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: [
        { name: 'Alex Johnson', grId: '2450', pcNum: '1', course: 'Full Stack' },
        { name: 'Mia Smith', grId: '1340', pcNum: '2', course: 'Animation' },
        { name: 'Ethan Brown', grId: '4321', pcNum: '3', course: 'Full stack' },
        { name: 'Sophia Lee', grId: '3531', pcNum: '6', course: 'Full stack' },
        { name: 'Liam Jones', grId: '1983', pcNum: '7', course: 'Frontend development' },
        { name: 'Emma Davis', grId: '4531', pcNum: '10', course: 'Frontend development' },
    ],
    isLoading: true,
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {

    }
})

export default studentsSlice.reducer;