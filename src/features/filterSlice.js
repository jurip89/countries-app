import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState:'',
    reducers: {
        setFilter: (state, action) => (state = action.payload)
        
    }
})

export const selectContinent = state => state.filter;

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer