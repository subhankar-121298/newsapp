import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            NewsMonkey
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <strong>Home</strong> <span className="sr-only"></span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  <strong>Business</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  <strong>Entertainment</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  <strong>General</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  <strong>Health</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  <strong>Science</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  <strong>Sports</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  <strong>Technology</strong>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
