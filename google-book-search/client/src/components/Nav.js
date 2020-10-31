import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
                <button className="navbar-toggler d-none"></button>
                <div className="collapse navbar-collapse show">
                    <h3 className="google-books">Google Books</h3>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item ">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                SEARCH
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                                SAVED
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;