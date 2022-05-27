import React from "react";
import { NavLink } from "react-router-dom";
import Signup from '../buttons/Signup';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid py-2  bg-blav=ck">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img src="/assets/images/Nav/Atgworld.png" className="d-block w-40" alt="Nav" height="40px" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" className="navbar-nav align-justify-content-center mb-auto">
                        <ul >
                            <form className="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Search for your groups in ATG" aria-label="Search" />
                            </form>
                        </ul>
                    </div>
                    <Signup />
                </div>
            </nav>
        </div>
    );
};

export default Header;