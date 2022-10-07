import React from "react";
import dataResearch from "../../assets/data-research-icon.svg";
import geographyIcon from "../../assets/geography-icon.svg";
import programsIcon from "../../assets/programs-icon.svg";
import legislativeIcon from "../../assets/legislative-icon.svg";

function DataStructure(props) {
  return (
    <div>
      <div className="data-structure-main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="data-item">
                <img src={dataResearch} alt="data research" />
                <p>Data & Research</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="data-item">
                <img src={geographyIcon} alt="data research" />
                <p>Geography & Mapping</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="data-item">
                <img src={programsIcon} alt="data research" />
                <p>Programs & Services</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="data-item">
                <img src={legislativeIcon} alt="data research" />
                <p>Legislative Fiscal Impacts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataStructure;
