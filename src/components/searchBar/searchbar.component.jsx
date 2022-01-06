import React from "react";
import './searchBar.style.scss'
import { useSelector,useDispatch } from "react-redux";
import {
    selectSearch,
    setSearchTerm,
    clearSearchTerm
} from "../../features/searchSlice";

export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const change = (e) => {
        dispatch(setSearchTerm(e.target.value))
    };

    const clear = () => {
        dispatch(clearSearchTerm())
    }
    
    return (<div>
        <input type='text' value={searchTerm} onChange={change} />
        {searchTerm.length > 0 ? <button className="clear" type="button" onClick={clear}>Claear</button> :''}
        </div>
    )
}