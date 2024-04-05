import React from "react"
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/deals">Special deals</Link>
            <Link to="/signin" className="right">Sign in</Link>
        </nav>
    )
}

export default Navbar;