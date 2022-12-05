import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/grow"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}
            >
                Grow a Mushroom
            </NavLink>
            <NavLink
                to="/kingdom"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}
            >
                Mushroom Kingdom
            </NavLink>
            <NavLink
                to="/cart"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkgreen",
                }}
            >
                Cart
            </NavLink>
        </div>
    );
}

export default NavBar;