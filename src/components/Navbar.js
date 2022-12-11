import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/homepage">Homepage</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
