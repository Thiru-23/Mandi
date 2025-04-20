import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Crops/CropContext";


import { CurrentBidCard } from "./CurrentBidCard";

const Mcurrent = () => {
  const context = useContext(noteContext);
  const {mcurrcrops,getmCurrent}=context;
 

  const handleClick = (e) => {
    e.preventDefault();
    getmCurrent();
  };
 
  //const crop=crops[0];
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <h2 className="mb-5 text-white">List of All Crops Available for bid</h2> */}
          <div className="container row mx-2">
            {/* <h5>{crops.length === 0 && "No Crop to Display"}</h5> */}
            {console.log(localStorage.getItem('role'))}
            
                  
             
             <h2 className="mb-5 text-white">List of The crop on which you have bid </h2>
            <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase mb-5"
                    type="submit"
                    onClick={handleClick}
                  >
                    Get The List of your crop
                  </button>
                  <div className="row">
                  {mcurrcrops.map((crop) => {
            return <CurrentBidCard key={crop._id} crop={crop} />;
          })}
                   </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Mcurrent;
