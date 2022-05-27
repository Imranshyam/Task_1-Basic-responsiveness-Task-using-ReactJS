import React from "react";
import Homedown from "./Homedown";

const Homepage = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/home/Homepic.jpeg" className="d-block w-100" alt="Homepic" height="500px" width="500px" />
                    </div>
                </div>
            </div>
            <Homedown/>
        </div>
    )
};

export default Homepage;