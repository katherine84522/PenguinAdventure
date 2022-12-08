import React from "react";
import { NavLink } from "react-router-dom";

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "pink",
//     textDecoration: "none",
//     color: "white",
// };

function NavBar() {
    return (
    <header>
            {/* <div classname="title"> */}
            {/* </div> */}
        <nav className="navbar">
            <img src="./src/assets/headerRED1.png"/>
            <div>
                <NavLink
                    to="/"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/grow"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn"
                >
                    Grow a Mushroom
                </NavLink>
                <NavLink
                    to="/kingdom"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn"
                >
                    Mushroom Kingdom
                </NavLink>
                <NavLink
                    to="/cart"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn"
                >
                    Cart
                </NavLink>
            </div>
        </nav>  
     </header>    
    );
}

export default NavBar;