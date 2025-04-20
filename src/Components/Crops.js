import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Crops/CropContext";
/* import Addnote from "./AddCrops"; */
import Noteitem from "./CropDetails";
import AfterBidCard from "./AfterBidCard";
/* import { FDashboard } from "./Dashboard/FDashboard"; */
const Notes = () => {
  const context = useContext(noteContext);
  const {crops,getCrops,forbidcrops,getforbidCrops}=context;
  // useEffect(() => {
  //   getCrops();
  //   //eslint-disable-next-line
  // }, []);
  const handleforbidClick = (e) => {
    e.preventDefault();
    getforbidCrops();
  };
  const handleClick = (e) => {
    e.preventDefault();
    getCrops();
  };
  const updateNote = (currentNote) => {
   
}
  //const crop=crops[0];
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mb-5 text-white">List of All Crops Available for bid</h2>
          <div className="container row mx-2">
            {/* <h5>{crops.length === 0 && "No Crop to Display"}</h5> */}
            {console.log(localStorage.getItem('role'))}
            <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase mb-5"
                    type="submit"
                    onClick={handleforbidClick}
                  >
                   Get list of your crops Available for bid
                  </button>
                  <div className="row">

                 
                  {forbidcrops.map((crop) => {
            return <Noteitem key={crop._id} crop={crop} updateNote={updateNote} />;
          })}
             </div>
             {console.log(crops)}
             <h2 className="mb-5 text-white">List of bids for your Crops </h2>
            <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase mb-5"
                    type="submit"
                    onClick={handleClick}
                  >
                    Get details of current bid for your crop
                  </button>
                  <div className="row">
                  {crops.map((crop) => {
            return <AfterBidCard key={crop._id} crop={crop} />;
          })}
                   </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Notes;
