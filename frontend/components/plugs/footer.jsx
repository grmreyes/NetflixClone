import React from 'react'
import { Link } from 'react-router-dom';




function Footer(props){
    return (
        <div className="footer">
            <h1 className="ginoreyes">Gino Reyes</h1>
            <a href="https://github.com/grmreyes/">
                <img src={window.github} className="footer-link"/>
            </a>
            <a href="mailto:grmreyes@gmail.com/">
                <img src={window.email} className="footer-link"/>
            </a>
        </div>
    )
}

export default Footer;