import React from "react";
import { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import noteContext from "../Context/Crops/CropContext";
// import cropimg from "../../Backend/images/"
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteCrop, editCrop } = context;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { crop, updateNote } = props;
  const [high, setHigh] = useState("");
  let date = crop.date;
  const higheat =async ()=> {
    const resp= await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/highestprice/${crop._id}`, {
    method: "GET",
    
  });
  
const rate = await resp.json();

setHigh(rate.highest);

  
  if (resp.status !== 200) {
    window.alert(rate);
    
  }
};
higheat();
  return (
    <section className="">
      <div className="container ">
        <article className="postcard light blue">
          <a className="postcard__img_link" href="#">
            <img
              className="postcard__img"
              src={`${crop.image}`}
              alt="Image Title"
            />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title blue">
              {/* <a href="#">Podcast Title</a> */}
            </h1>
            <div className="postcard__subtitle  ">
              <time datetime="2020-05-25 12:00:00 ">
                <i
                  className="fas fa-calendar-alt my-4 mx-1
                "
                ></i>
                {new Date(date).toUTCString()}
              </time>
            </div>
            {/* <div className="postcard__bar"></div> */}
            <div className="postcard__preview-txt">
              <p>Crop:{crop.cropName}</p>
              <p>Address:{crop.address} </p>
              <p> Market:{crop.market}</p>

              <p>Plot No.:{crop.plotno}</p>
              <p>Net weight:{crop.weight}</p>

              <p>Highest-bid:{high}</p>
            </div>
            <div className="btn-group">
              {/* <button
                variant="primary"
                onClick={handleShow}
                className="btn btn-primary"
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <span className="mx-2">Update</span>
              </button> */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Crop Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        // onChange={onChange}
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
                        // onChange={onChange}
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
                        // onChange={onChange}
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
                        // onChange={onChange}
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
                        // onChange={onChange}
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
                    {/* <div className="mb-3">
                <label className="form-label">Image</label>
                 <input type="file" className="form-control" name="image" onChange={imageUpload}></input>
                  
                </div>
                     */}
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      console.log("sab changa si")
                      editCrop(crop._id);
                    }}
                  >
                    Update Details
                  </Button>
                </Modal.Footer>
              </Modal>
              <button
                onClick={() => {
                  deleteCrop(crop._id);
                }}
                type="button"
                className="btn btn-danger "
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className="mx-2">Delete</span>
              </button>
            </div>
          
            
          </div>
        </article>
      </div>
    </section>
  );
};

export default Noteitem;
