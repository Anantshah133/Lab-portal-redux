import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    computerList: [
        { pcNum: 1, pcName: 'R1', company: 'Lenovo', isAssigned: true },
        { pcNum: 2, pcName: 'R2', company: 'Lenovo', isAssigned: true },
        { pcNum: 3, pcName: 'R3', company: 'Lenovo', isAssigned: true },
        { pcNum: 4, pcName: 'R4', company: 'Mac', isAssigned: false },
        { pcNum: 5, pcName: 'R5', company: 'Mac', isAssigned: false },
        { pcNum: 6, pcName: 'R6', company: 'Lenovo', isAssigned: true },
        { pcNum: 7, pcName: 'R7', company: 'Lenovo', isAssigned: true },
        { pcNum: 8, pcName: 'R8', company: 'HP', isAssigned: false },
        { pcNum: 9, pcName: 'R9', company: 'HP', isAssigned: false },
        { pcNum: 10, pcName: 'R10', company: 'HP', isAssigned: true },
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
            console.log('called', pcNum, value);
            if (pc) {
                pc.isAssigned = value;
            }
        }
    }
})

export const { setIsAssigned } = computersSlice.actions;
export default computersSlice.reducer;