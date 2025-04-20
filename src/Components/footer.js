import React from "react";
import "./hero-section/CHero.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-secondary text-center text-lg-start mt-4 fixed-bottom ">
        {/* <!-- Copyright --> */}
        <div className="text-center p-3 ">
          © 2022 Copyright :
          <Link className="text-dark text-white" to="/">
            {" "}
            DigitalMandi.com
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};
