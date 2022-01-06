import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearch } from './searchSlice';
import { selectContinent } from "./filterSlice";
export const laodContries = createAsyncThunk('countries/loadCountries', async () => {
    const res = await fetch('https://restcountries.com/v2/all');
    const json = await res.json();
    return json
})

const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        all:[],
        isLoading: false,
        isError: false
    },
    extraReducers: {
        [laodContries.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        [laodContries.fulfilled]: (state, action) => {
            state.all = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        [laodContries.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
});



export const selectAllCountries = (state) => state.countries.all

export const selectFilteredCountries = state => {
    const countries = selectAllCountries(state);
    const search = selectSearch(state);
    const cont = selectContinent(state)
    
    return countries.filter(country=> country.name.toLowerCase().includes(search.toLowerCase()) && country.region.toLowerCase().includes(cont.toLowerCase()))
}

export default countrySlice.reducer