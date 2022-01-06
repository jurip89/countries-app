import React from "react";
import { Header } from "../header/header.component";
import { AllCountries } from "../main/allCountries.component";
import './homePage.style.scss'

export const HomePage = () => {
    document.title = 'Home'

    return (
        <div className='app'>
            <Header />
            <AllCountries/>
        </div>
    )
}