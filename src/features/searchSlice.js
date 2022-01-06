import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState:'',
    reducers: {
        setSearchTerm: (state, action) => (state = action.payload),
        clearSearchTerm: (state) => (state = '')
            
        
    }
})

export const selectSearch = state => state.search
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer