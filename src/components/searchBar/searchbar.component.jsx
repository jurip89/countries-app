import React from "react";
import './searchBar.style.scss'
import { useSelector,useDispatch } from "react-redux";
import {
    selectSearch,
    setSearchTerm,
    clearSearchTerm
} from "../../features/searchSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearch);

    const change = (e) => {
        dispatch(setSearchTerm(e.target.value))
    };

    const clear = () => {
        dispatch(clearSearchTerm())
    }
    
    return (<div className="search-container">
        <input type='text' value={searchTerm} onChange={change} />
        {searchTerm.length > 0 ? <FontAwesomeIcon className="clear" icon={faDeleteLeft} onClick={clear}>Claear</FontAwesomeIcon> :''}
        </div>
    )
}