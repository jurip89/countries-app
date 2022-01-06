import React from "react";
import './countryCard.style.scss'
import { Link } from "react-router-dom";
export const CountryCard = ({ country }) => {

    return (
        
        <div className="card">
            <Link className="link" to={`/${country.name}`}>   
            <img className="flag" src={country.flag} alt={country.flags.svg} />
                <div className="container">
                <h2 className="title">{country.name}</h2>
                    
                <p className="text"><strong>Population:</strong> {country.population }</p>
                <p className="text"><strong>Region:</strong> { country.region}</p>
                <p className="text"><strong>Capital:</strong> {country.capital}</p>
                </div>
                </Link>
            </div>
        
    )
}