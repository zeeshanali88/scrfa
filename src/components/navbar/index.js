import React, { useState } from "react";
// import "./navbar.css";
import "../styles/navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/logo.png";

function Navbar(props) {
  const [showMenu, setMenu] = useState(true);
  const handlClick = () => {
    setMenu(!showMenu);
  };

  return (
    <div>
      <div className="container-fluid p-0">
        <nav className="navbar">
          <div className="menu-icon">
            {showMenu ? (
              <button type="button" onClick={handlClick}>
                <FontAwesomeIcon icon={faBars} />
                <p>Menu</p>
              </button>
            ) : (
              <button type="button" onClick={handlClick}>
                <FontAwesomeIcon icon={faXmark} />
                <p>Close</p>
              </button>
            )}
          </div>
          <div className="nav-box">
            <div className="navlogo-main">
              <div className="nav-logo">
                <a href="#">
                  <img src={logoImage} alt="logo Image" />
                </a>
              </div>
              <div className="nav-lg-text">
                <h2>
                  South carolina
                  <br />
                  Revenue and fiscal affairs office
                </h2>
                <p>Transforming data into solutions for South Carolina</p>
              </div>
            </div>
            <div className="navbar-menu-right">
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Boards & Committess</a>
                </li>
              </ul>
              <div className="searchbar-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </nav>
        {showMenu ? (
            <div className="navbar-menu d-none">
 
            </div>
            ) : (
            <div className="navbar-menu">
                <div className="row">
                  <div className="col-md-3 col-sm-3">
                    <div className="navMenu-inner">
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">News & Events</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Boards & Committess</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-9">
                    <div className="nav-menudata">
                      <div className="nav-databox">
                        <div className="databox-itm">
                          <div className="databox-heading">
                            <h2>Data & Research</h2>
                            <div className="databox-border"></div>
                          </div>
                          <ul>
                            <li>Economy</li>
                            <li>State Finances</li>
                            <li>Education</li>
                            <li>Healthcare</li>
                            <li>Local Government</li>
                            <li>Population and Demographics</li>
                            <li>State Register Calculations</li>
                            <li>Presentations</li>
                          </ul>
                          <div className="databox-heading">
                            <h2>Legislative fiscal impacts</h2>
                            <div className="databox-border"></div>
                          </div>
                          <ul>
                            <li>
                              Current General Assembly Session Previous General
                              Assembly Session Forms
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="nav-databox">
                        <div className="databox-itm">
                          <div className="databox-heading">
                            <h2>Geography & Mapping</h2>
                            <div className="databox-border"></div>
                          </div>
                          <ul>
                            <li>Transportation Carrier Network (Uber)</li>
                            <li>SC Real Time Network</li>
                            <li>SC State GIS</li>
                            <li>Maps</li>
                            <li>Interactive Mapping</li>
                            <li>Statewide Aerial Imagery</li>
                          </ul>
                        </div>
                      </div>
                      <div className="nav-databox">
                        <div className="databox-itm">
                          <div className="databox-heading">
                            <h2>Programs & Services</h2>
                            <div className="databox-border"></div>
                          </div>
                          <ul>
                            <li>Precinct Demographics and Redistricting</li>
                            <li>State 911 Program</li>
                            <li>Data Services and Online Solutions</li>
                            <li>Geodetic Survey</li>
                            <li>Fiscal Analysis</li>
                            <li>2020 Census</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
