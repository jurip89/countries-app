import React from "react";
import {useNavigate} from 'react-router-dom'

export const CountryPage = () => {
    let navigate = useNavigate()
    const handleClick = () => {
       navigate('/')
    }
    return (
        <div className="page">
            <div className="top">
                <button onClick={handleClick}>
                    Back
                </button>
            </div>
            
        </div>
    )
}