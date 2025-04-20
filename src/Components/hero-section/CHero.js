import React from "react";
import { Navbar } from "../nav links/CNav";
import "./CHero.css";
import { Link } from "react-router-dom";
import { Carousel } from "../carousel/Ccarousel";
import image from "../../images/indian-farmer.webp";
import { LatestPrice } from "../KnowCurrPrice/priceboard";


export const Hero = () => {
  return (
    <>
      <Carousel />
      <LatestPrice/>
    </>
  );
};
