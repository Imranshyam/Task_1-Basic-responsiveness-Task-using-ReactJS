import React from "react";
import DATA from "../Data";
import { NavLink } from "react-router-dom";


const Homescroll = () => {
    const cardItem = (item) => {
        return (
            <div className="d-block w-200" alt="Homepic" height="300px" width="300px">
                <img src={item.img} className="card-img-center" alt={item.title}/> 
                         <p className="card-text justify fw-bold">{item.desc}</p>                        
                    
            </div>
        )
    }

    return (
        <div>
            <div>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 text-center">
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="cointainer col-3">
                    <div className="row justify-content-center">
                        {DATA.map(cardItem)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homescroll;