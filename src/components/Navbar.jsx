import React from "react";
import AirbnbLogo from "../images/airbnb-logo.png"
function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={AirbnbLogo} alt="logo"/>
        </nav>
    )
}

export default Navbar;