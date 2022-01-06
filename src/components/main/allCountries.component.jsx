import React from "react";
import { selectFilteredCountries} from "../../features/countrySlice";
import { useSelector} from "react-redux";
import './allCountries.style.scss'
import { CountryCard } from "../countryCard/countryCard.component";


export const AllCountries = () => {
    const countriesAll = useSelector(selectFilteredCountries);
   
    const { isLoading } = useSelector(state => state.countries.isLoading)

    

    if (isLoading) {
        return <p>Loading.. please wait!</p>
    }
    return (
        <div className="main">
            {countriesAll.map((country, i) => <CountryCard key={i } country={country}/>)}
            
        </div>
    )
}