import React from "react";
import { NavLink,} from "react-router-dom";


const Signup = () => {
    return (

        <div>
            <div>
            {/* <!-- Button trigger modal --> */}
            <NavLink to="createaccount" type="button" style={{color:"blue"}} className="me-auto fw-bold" data-bs-toggle="modal" data-bs-target="#signupModal" className="btn btn dropdown-toggle">
                <span></span> Create account.It's Free!
            </NavLink>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">                    
                            <div className="container">
                                <div style={{color:"green"}}>
                                <p>Let"s Learn,Share&inspire each other with our passion for computer engineering.sign  up now</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <h5 className="modal-title mb-2" id="signupModalLabel">Create Account</h5>
                                        <form>
                                            <div className="mb-3">
                                             <input type="text" className="form-control" placeholder="FristName" id="exampleInput" />
                                            </div>
                                            <div className="mb-3">
                                             <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
                                            </div>
                                            <div className="mb-3">
                                             <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1" />
                                            </div>
                                            <div className="mb-3">
                                             <input type="password" className="form-control" placeholder="confirm Password" id="exampleInputPassword1" />
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100 mb-3">Create Account</button>
                                            <br />
                                            <button className="btn btn-outline-primary w-100 mb-2">
                                            <span className="fa fa-google me-2"></span>Sign up with google</button>
                                            <button className="btn btn-outline-primary w-100 mb-4">
                                            <span className="fa fa-facebook me-2"></span>Sign up with facebook</button>
                                       </form>        
                                    </div>
                                    <div className="col-md-5 d-flux justify-content-center">
                                        <NavLink  to="/Signin" className="btn" style={{color:"blue"}}>
                                            Already have an Account? SignIn</NavLink>
                                        <img src="/assets/images/image1.jpeg" alt="Signin" height="200px" width="200px" />
                                        <p className="front sm-2"> By using up, you agree to our Terms & Condition, Privacy Policy </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;






        //     <div className=" ">
        //
        // </div>
        // <div className="">
        //               
        //     </div>
        //     <div className="container">
        //     <div className="col-md-5 d-flux justify-content-center">
        //      <img src="/assets/images/image1.jpeg" alt="Contact Us" height="300px" width="300px" />
        //      </div>
        //         <h>Already have an account ? </h>
        //     </div>
 