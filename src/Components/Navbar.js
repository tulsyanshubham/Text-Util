import React , { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const [homeActive, setHomeActive] = useState("active");
  const [aboutActive, setAboutActive] = useState("");

  const onClick1 = () => {
    setHomeActive('active');
    setAboutActive('');
  }

  const onClick2 = () => {
    setHomeActive('');
    setAboutActive('active');
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/Text-Util">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${homeActive}`} aria-current="page" to="/Text-Util" onClick={onClick1}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${aboutActive}`} to="/Text-Util/about" onClick={onClick2}>
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
              {`${props.mode==='dark'?'Disable':'Enable'} Dark Mode`}
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "Title here", about: "About here" };
