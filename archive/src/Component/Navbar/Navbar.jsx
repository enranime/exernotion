import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container-fluid pe-1">
            <Link to='/exernotion/index' className="navbar-brand p-logo fw-bold animated_test1"><span className="Exer animated_test2">Exer</span>Notion</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav pe-3">

                    <Link 
                        to="/exernotion"
                        className="nav-link text-light fw-bold p-navtext" >
                        Add your Activity
                    </Link>

                    <Link 
                        to='/exernotion/activity-history' 
                        className="nav-link text-light fw-bold p-navtext">
                        Activity History
                    </Link>

                    <a className="nav-link text-light fw-bold p-navtext" href="#">Subscribe</a>
                    <a className="nav-link text-light fw-bold p-navtext" href="#">Sign up</a>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;