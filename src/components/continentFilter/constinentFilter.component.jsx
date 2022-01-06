import React from "react";
import './continentFilter.style.scss'
import { useSelector,useDispatch } from "react-redux";
import { setFilter, selectContinent } from "../../features/filterSlice";
import {laodContries} from '../../features/countrySlice'
export const ContinentFilter = () => {
    const dispatch = useDispatch();
    const continent = useSelector(selectContinent);
    

    const handleChange = (e) => {
        if (e.target.value === '') {
            dispatch(laodContries)
        }
        dispatch(setFilter(e.target.value))
    }

    return (
        <select onChange={handleChange} value={continent}>
            <option value=''>No Continent Selected</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="polar">Polar</option>
            <option value="Africa">Africa</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}