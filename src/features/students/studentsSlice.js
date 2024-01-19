import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: [
        { name: 'Alex Johnson', grId: '2450', pcNum: '1', pcName: 'R1', course: 'Full stack development' },
        { name: 'Mia Smith', grId: '1340', pcNum: '2', pcName: 'R2', course: 'Animation' },
        { name: 'Ethan Brown', grId: '4321', pcNum: '3', pcName: 'R3', course: 'Full stack development' },
        { name: 'Sophia Lee', grId: '3531', pcNum: '6', pcName: 'R6', course: 'Flutter Development' },
        { name: 'Liam Jones', grId: '1983', pcNum: '7', pcName: 'R7', course: 'Frontend development' },
        { name: 'Emma Davis', grId: '4531', pcNum: '10', pcName: 'R10', course: 'Frontend development' },
    ],
    isLoading: true,
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, { payload }) => {
            state.studentList.push(payload)
        },
        updateStudent: (state, action) => {
            const index = state.studentList.findIndex(student => student.grId === action.payload.grId);
            if (index !== -1) {
                state.studentList[index] = action.payload;
            }
        }
    }
})

export const { addStudent, updateStudent } = studentsSlice.actions;
export default studentsSlice.reducer;