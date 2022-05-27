import React from "react";
import { NavLink } from "react-router-dom";
import Homescroll from "./Homescroll";

const Homedown = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul className="navbar-nav me-auto mb-4 ">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="allposts">All Posts(32)</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="Article">Article</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Event">Event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="education">Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Job">Job</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand me-auto fw-bold" className="btn btn dropdown-toggle" to="/">Write Post</NavLink>
                        <button type="button" className="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#signupModal">
                            <span className="fa fa-user-plus me-1"></span> Join Group
                        </button>
                        <hr />
                    </div>
                </div>
            </nav>
            <Homescroll/>
        </div>
    )
}

export default Homedown;