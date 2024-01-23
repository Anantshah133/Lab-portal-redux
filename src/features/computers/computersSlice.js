import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    computerList: [
        { pcNum: 6268, pcName: 'R1', company: 'Lenovo', isAssigned: true },
        { pcNum: 9127, pcName: 'R2', company: 'Lenovo', isAssigned: true },
        { pcNum: 4317, pcName: 'R3', company: 'Lenovo', isAssigned: true },
        { pcNum: 5713, pcName: 'R4', company: 'Mac', isAssigned: false },
        { pcNum: 1864, pcName: 'R5', company: 'Mac', isAssigned: false },
        { pcNum: 7927, pcName: 'R6', company: 'Lenovo', isAssigned: true },
        { pcNum: 5670, pcName: 'R7', company: 'Lenovo', isAssigned: true },
        { pcNum: 2963, pcName: 'R8', company: 'HP', isAssigned: false },
        { pcNum: 3986, pcName: 'R9', company: 'HP', isAssigned: false },
        { pcNum: 1097, pcName: 'R10', company: 'HP', isAssigned: true },
    ],
    isLoading: true,
}

const computersSlice = createSlice({
    name: 'computers',
    initialState,
    reducers: {
        setIsAssigned: (state, action) => {
            const { pcNum, value } = action.payload;
            const pc = state.computerList.find(pc => pc.pcNum === pcNum);
            if (pc) pc.isAssigned = value;
            // console.log('called', pcNum, value);
        },
        addComputer: (state, action) => {
            state.computerList.push(action.payload);
        },
        editComputer: (state, action) => {
            const updatedData = state.computerList.map((computer) => {
                if (action.payload.pcNum === computer.pcNum) {
                    console.log('changed');
                    return action.payload;
                }
                return computer;
            })
            state.computerList = updatedData;
        },
        deleteComputer: (state, action) => {
            const delId = action.payload;
            state.computerList = state.computerList.filter((pc) => pc.pcNum !== delId)
        }
    }
})

export const { setIsAssigned, addComputer, editComputer, deleteComputer } = computersSlice.actions;
export default computersSlice.reducer;