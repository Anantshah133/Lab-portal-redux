import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: [
        { name: 'Alex Johnson', grId: '2450', pcNum: '6268', pcName: 'R1', course: 'Full stack development' },
        { name: 'Mia Smith', grId: '1340', pcNum: '9127', pcName: 'R2', course: 'Animation' },
        { name: 'Ethan Brown', grId: '4321', pcNum: '4317', pcName: 'R3', course: 'Full stack development' },
        { name: 'Sophia Lee', grId: '3531', pcNum: '7927', pcName: 'R6', course: 'Flutter Development' },
        { name: 'Liam Jones', grId: '1983', pcNum: '5670', pcName: 'R7', course: 'Frontend development' },
        { name: 'Emma Davis', grId: '4531', pcNum: '1097', pcName: 'R10', course: 'Frontend development' },
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
        },
        deleteStudent: (state, action) => {
            const id = action.payload;
            state.studentList = state.studentList.filter((student) => student.grId !== id);
        },
        setPcName: (state, action) => {
            const { name, pcNum } = action.payload;
            const student = state.studentList.find((stud) => stud.pcNum == pcNum);
            if(student) student.pcName = name;
        }
    }
})

export const { addStudent, updateStudent, deleteStudent, setPcName } = studentsSlice.actions;
export default studentsSlice.reducer;