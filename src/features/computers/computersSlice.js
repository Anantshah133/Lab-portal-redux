import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    computerList: [
            
        { pcNum: 2, company: 'Lenovo', isAssigned: true },
        { pcNum: 3, company: 'Mac', isAssigned: true },
        { pcNum: 4, company: 'Mac', isAssigned: false },
        { pcNum: 5, company: 'Mac', isAssigned: false },
        { pcNum: 6, company: 'Lenovo', isAssigned: true },
        { pcNum: 7, company: 'HP', isAssigned: true },
        { pcNum: 8, company: 'HP', isAssigned: false },
        { pcNum: 9, company: 'HP', isAssigned: false },
        { pcNum: 10, company: 'HP', isAssigned: true },
    ], 
    isLoading: true,
}

const computersSlice = createSlice({
    name: 'computers',
    initialState,
    reducers: {

    }
})

export default computersSlice.reducer;