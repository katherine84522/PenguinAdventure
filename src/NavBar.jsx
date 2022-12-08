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
        <div className='navbar'>
            <div className="headerImg">
                <img className="logoImg" src='./src/assets/headerRED1.png' />
            </div>
            <div className='navButtons'>
                <NavLink
                    to="/"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn bootstrap-killer"
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
                    className="btn bootstrap-killer"
                >
                    Grow a Mushroom
                </NavLink>
                <NavLink
                    to="/adventure"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn bootstrap-killer"
                >
                    Adventure
                </NavLink>
                <NavLink
                    to="/cart"
                    exact
                    // style={linkStyles}
                    // activeStyle={{
                    //     background: "darkgreen",
                    // }}
                    className="btn bootstrap-killer"
                >
                    Cart
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;