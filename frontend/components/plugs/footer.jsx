import React from 'react'
import { Link } from 'react-router-dom';




function Footer(props){
    return (
        <div className="footer">
            <a href="https://github.com/grmreyes/">
                <img src={window.github} className="footer-link"/>
            </a>
        </div>
    )
}

export default Footer;