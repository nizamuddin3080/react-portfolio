import React from "react";
import logo from "../components/logo.png"; //Import Logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Import Font-Awesome
import { faBars } from '@fortawesome/free-solid-svg-icons'; //Import Font-Awesome


//**************************** Navbar **********************************
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt= "logo....." /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar //export Navbar
