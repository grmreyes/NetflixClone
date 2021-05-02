import React from 'react'
import { Link } from 'react-router-dom';




function Footer(props){
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://github.com/grmreyes/">
                <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/grmreyes/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:grmreyes@gmail.com">
                    <i className="far fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;