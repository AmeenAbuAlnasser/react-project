import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
          
            </ul>
            <div className="search ps-3 pe-3 d-none d-lg-block">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <Link className="btn main-btn rounded-pill px-4 mx-2" to="/login">login</Link>
            <Link className="btn main-btn rounded-pill px-4" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
