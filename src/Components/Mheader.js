import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard/fdashboard.css";
export const Mheader = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="main_div">
      <div className="dashboard_main">
        <div id="one">
          <Link
            className={`Link ${
              location.pathname === "/buycrop" ? "active" : " "
            }`}
            to="/buycrop"
          >
            Buy Crop
          </Link>
        </div>
        <div id="two">
          {" "}
          <Link className={`Link ${
              location.pathname === "/mcurrent" ? "active" : " "
            }`} to="/mcurrent">
             Current Bids{" "}
          </Link>{" "}
        </div>
        <div id="three">
          {" "}
          <Link className={`Link ${
              location.pathname === "/merchantdashboard" ? "active" : " "
            }`} to="/merchantdashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};