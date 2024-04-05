import React from "react"

function Navbar () {
    return (
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">Profile</a>
            <a href="#">Sign up</a>
            <a href="#">Special deals</a>
            <a href="#" className="right">Sign in</a>
        </div>
    )
}

export default Navbar;