import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countrySlice'
import searchReducer from '../features/searchSlice'
import filterReducer from '../features/filterSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    search: searchReducer,
    filter:filterReducer
  },
});
