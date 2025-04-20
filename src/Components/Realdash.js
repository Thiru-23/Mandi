import React from "react";
import { useContext} from "react";
import noteContext from "../Context/Crops/CropContext";

import Noteitem from "./CropDetails";
import { FarmerDash } from "./FarmerDash";

const Realdashboard = () => {
  const context = useContext(noteContext);
  const {dashcrops, getFdash}=context;
 
 
  const handleClick = (e) => {
    e.preventDefault();
    getFdash();
  };
  //const crop=crops[0];
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mb-5 text-white">Your All Sold Crops</h2>
          <div className="container row mx-2">
            
             
            <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase mb-5"
                    type="submit"
                    onClick={handleClick}
                  >
                    Get Your Dashboard
                  </button>

                  {dashcrops.map((crop) => {
            return <FarmerDash key={crop._id} crop={crop} />;
          })}
                
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Realdashboard;
