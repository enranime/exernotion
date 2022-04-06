import React from "react";

import './Footer.css'

const Footer = () => {
    return (
        <section id="footer-section">
        {/* <!-- footer section --> */}
        <div className="container-fluid">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 pe-3 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-light">&copy;Copyright 2019</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-light" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="ms-3"><a className="text-light" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="ms-3"><a className="text-light" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                </ul>
            </footer>
        </div>


    </section>
    );
};


export default Footer;