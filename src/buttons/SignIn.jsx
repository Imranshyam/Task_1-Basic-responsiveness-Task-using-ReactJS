import React from "react";
import { NavLink } from "react-router-dom";
const Signin = () => {
    return (
        <div>
            <div className="container">
                <div style={{ color: "green" }}>
                    <p>Let"s Learn,Share&inspire each other with our passion for computer engineering.sign  up now</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="modal-title mb-2" id="signupModalLabel">Sign In</h5>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Sign In</button>
                            <br />
                            <button className="btn btn-outline-primary w-100 mb-2">
                                <span className="fa fa-google me-2"></span>Sign up with google</button>
                            <button className="btn btn-outline-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span>Sign up with facebook</button>
                        </form>
                    </div>
                    <div className="col-md-5 d-flux justify-content-center">
                        <NavLink className="nav-link" to="Signup" className="btn btn" style={{ color: "blue" }}>
                            Don't have an account yet? Create new for free !</NavLink>
                        <img src="/assets/images/image1.jpeg" alt="Signup" height="300px" width="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;