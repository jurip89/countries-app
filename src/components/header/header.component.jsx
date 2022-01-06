import React from "react";
import { SearchBar } from "../searchBar/searchbar.component";
import { ContinentFilter } from "../continentFilter/constinentFilter.component";
import './header.style.scss'
export const Header = () => {
    return (
        
            
            <div className="bottom">
                <SearchBar />
                <ContinentFilter />
            </div>
        
    )
}