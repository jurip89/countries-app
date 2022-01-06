import React from "react";
import { Header } from "../header/header.component";
import { AllCountries } from "../main/allCountries.component";

export const HomePage = () => {
    

    return (
        <div className='app'>
            <Header />
            <AllCountries/>
        </div>
    )
}