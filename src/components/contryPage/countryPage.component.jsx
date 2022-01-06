import React from "react";
import {useNavigate,useParams} from 'react-router-dom'
import { selectAllCountries } from "../../features/countrySlice";
import { useSelector } from "react-redux";
import './countryPage.style.scss'

export const CountryPage = () => {
    const countries = useSelector(selectAllCountries)
    const { name } = useParams();
    document.title = name
    const country = countries.filter(c=> c.name === name)
    let navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
        console.log(country)
    }
    return (
        <div className="page">
            <div className="top">
                <button className="back" onClick={handleClick}>
               <strong>&#8592;</strong> 
                </button>
            </div>
            <div className="big-card">
             
                <img className="flag" src={country[0].flag} alt={country[0].flags.svg} /> 
                <div className="container">
                <h2 className="title">{country[0].name}</h2>
                    
                <p className="text"><strong>Population:</strong> {country[0].population }</p>
                <p className="text"><strong>Region:</strong> { country[0].region}</p>
                <p className="text"><strong>Capital:</strong> {country[0].capital}</p>
                <p className="text"><strong>Population:</strong> {country[0].population}</p>
                <p className="text"><strong>Official Language:</strong> {country[0].languages[0].name}</p>
            </div> 
                
            
            </div>
            
        </div>
    )
}