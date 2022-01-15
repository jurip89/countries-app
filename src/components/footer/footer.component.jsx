import React from "react";
import './footer.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faSass} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer>
            <p>Created with: <FontAwesomeIcon icon={faReact}/> redux.js & <FontAwesomeIcon icon={faSass}/></p>
        </footer>
    )
}