import React from "react";
import { useContext } from "react";
import { useState } from "react";
import noteContext from "../Context/Crops/CropContext";
import "./addcrop.css";
const Addnote = () => {
  const context = useContext(noteContext);
  const { addCrop } = context;
  const [crop, setCrop] = useState({
    name: "",
    address: "",
    plotno: "",
    weight: "",
    market: "",
    image: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addCrop(
      crop.name,
      crop.address,
      crop.plotno,
      crop.weight,
      crop.market,
       crop.image
    );
  };
  const onChange = (e) => {
    setCrop({ ...crop, [e.target.name]: e.target.value });
  };

  const imageUpload = (event) => {
    console.log(event.target.files[0]);
    setCrop({ ...crop, image: event.target.files[0] })
    //console.log(crop.image.name);
  };
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow  overflow-hidden">
            <div className="card-body p-4 p-sm-5">
              <h3 className="card-title text-center fs-3">Add New Crop</h3>
              <form method="POST">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control"
                    id="name"
                    name="name"
                    value={crop.name}
                    placeholder="myusername"
                    required
                  />
                  <label htmlFor="name">Crop Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control"
                    id="address"
                    name="address"
                    value={crop.address}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    onChange={onChange}
                    className="form-control"
                    id="plotno"
                    name="plotno"
                    value={crop.plotno}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="plotno">Plot No.</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    onChange={onChange}
                    className="form-control"
                    id="weight"
                    name="weight"
                    value={crop.weight}
                    placeholder="1234567890"
                  />
                  <label htmlFor="weight">
                    Weight
                    <span> (Kg)</span>
                  </label>
                </div>

                <div className="mb-3">
                  <label className="my-3 me-3 mx-2" htmlFor="market">
                    Select Market :
                  </label>
                  <select
                    id="market"
                    name="market"
                    value={crop.market}
                    onChange={onChange}
                    className="custom-select my-1 mr-sm-2"
                  >
                    <option>Choose...</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Noida">Noida</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Surat">Surat</option>
                  </select>
                </div>
                <div className="mb-3">
                <label className="form-label">Image</label>
                 <input type="file" className="form-control" name="image" onChange={imageUpload}></input>
                  
                </div>
               

                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                    type="submit"
                    onClick={handleClick}
                  >
                    Add Crop
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
