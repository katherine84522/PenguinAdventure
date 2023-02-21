import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
    return (
        <div className='navbar'>
            <div className="headerImg">
                <img className="logoImg" src='./src/assets/logo-no-background.png' />
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
                    Build a Penguin
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