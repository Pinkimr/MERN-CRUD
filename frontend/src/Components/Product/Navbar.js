import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/product">
                Product
              </NavLink>
            </li>
            {localStorage.getItem("isAdmin") === "true" ?
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/customer">
                  Customer
                </NavLink>
              </li>
              : ""}
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/">Sign Out</Link>
      </div>
    </nav>
  );
};

export default Navbar;