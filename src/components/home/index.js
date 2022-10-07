import React, { Component } from "react";
import "../styles/home/home.css";
import "../styles/breakpoints/breakpoints.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


// Components
import DataStructure from "./dataStructure";
import HomeUpdates from "./homeUpdates";
import PopularServices from "./popularServices";
import HomeSearchBar from "./homeSearchBar";

function Home(props) {
  return (
    <div>
      {/* ************* Hero Section Start ************* */}
      <div className="hero-section">
        <div className="overly">
          <div className="hero-text">
            <p>
              Providing independent research, analysis, and resources to
              facilitate informed policy decisions and administration of
              services
            </p>
            <HomeSearchBar />
          </div>
        </div>
      </div>
      {/* ************* Hero Section End ************* */}

     <DataStructure />
     <PopularServices />
     <HomeUpdates />

     <div className="container">
      <div className="scroll-box">
        <div className="backtotop-icon">
          <span>Back to Top</span>
          <div className="angle-icons">
            <span className="up-angle"><FontAwesomeIcon icon={faAngleUp } /></span>
            <span className="down-angle"><FontAwesomeIcon icon={faAngleDown } /></span>
          </div>
        </div>
      </div>
     </div>

    </div>
  );
}

export default Home;
