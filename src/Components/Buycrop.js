import React from "react";
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../Context/Crops/CropContext";
import "./addcrop.css";
import BuyCard from "./BuyCard";
import Noteitem from "./CropDetails";
const Buycrop = () => {
  const context = useContext(noteContext);
  const { getlistMarket, getlist } = context;
 let market;
 const onChange= (e) =>{
    console.log(e.target.value);
    getlistMarket(e.target.value);

 }


  return (
    <div className="container">
        <div className="row container">
          <h3 className=" text-white">Select Market :</h3>
          <div className="container row mx-2">

                  <select
                    id="market"
                    name="market"
                    value={market}
                    onChange={onChange} 
                    className="custom-select my-1 mr-sm-2 selectinput"
                  >
                    <option>Choose...</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Noida">Noida</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Surat">Surat</option>
                  </select>

                  {getlist.map((crop) => {
            return <BuyCard key={crop._id} crop={crop} />;
           
          })}
                   
          </div>
         
        </div>
      </div>
  );
};

export default Buycrop;
