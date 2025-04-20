import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../Context/Crops/CropContext";

export const FarmerDash = (props) => {
  const context = useContext(noteContext);

  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  let history = useHistory();
  const { crop, updateNote } = props;
  let date = crop.date;
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
console.log(crop.merchant)
  const Detail =async ()=> {
    const resp= await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/mname/${crop.merchant}`, {
    method: "GET",
    
  });
  
const rate = await resp.json();
/* console.log(rate) */
setName(rate.name);
setNumber(rate.phoneno)
  
  if (resp.status !== 200) {
    window.alert(rate);
    history.push("/farmerdashboard");
  }
};
Detail();
  return (
    <>
      <section class="">
        <div class="container py-2">
          <article class="postcard light blue">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src={`${crop.image}`}
                alt="Crop Image"
              />
            </a>
            <div class="postcard__text t-dark">
              <h1 class="postcard__title blue">
                {/* <a href="#">Podcast Title</a> */}
              </h1>
              <div class="postcard__subtitle  ">
                <time datetime="2020-05-25 12:00:00 ">
                  <i
                    class="fas fa-calendar-alt my-4 mx-1
                "
                  ></i>
                  {new Date(date).toUTCString()}
                </time>
              </div>

              <div class="postcard__preview-txt">
                <p>Crop: {crop.cropName}</p>
                <p>Address: {crop.address}</p>
                <p>Market:{crop.market}</p>
                <p>Plot No.: {crop.plotno}</p>
                <p>Net weight:{crop.weight}</p>
                <p
                  style={{
                    "font-weight": "Bold",
                  }}
                >
                  {" "}
                  Merchant Name: {name}
                </p>
                <p>
                  Merchant Contact No.:{number}
                </p>
                <p
                  style={{
                    "font-weight": "Bold",
                  }}
                >
                  {" "}
                  Final Bid: <span>{crop.price}</span>{" "}
                </p>
                <div class="tag__item play ">
                  <a
                    style={{
                      "font-weight": "Bold",
                    }}
                  >
                    <i
                      class="fa fa-check-square-o"
                      aria-hidden="true"
                      style={{
                        color: "green",
                        fontSize: "25px",
                        
                        "font-weight": "Bold",
                      }}
                    ></i>{" "}
                    Succesfully Sold
                  </a>
                  <button type="button" class="btn btn-success mx-1"><a href={ `https://api.whatsapp.com/send?phone=${number}`} target="_blank" rel="noreferrer">
                <i class="fa fa-whatsapp" aria-hidden="true"></i> Chat with merchant 
                </a></button>
                  <a
                    className="mx-3"
                    style={{
                      "font-weight": "Bold",
                    }}
                  >
                    <i
                      class="fa fa-file-pdf-o"
                      aria-hidden="true"
                      style={{
                        color: "red",
                        fontSize: "25px",
                        "font-weight": "Bold",
                      }}
                    ></i>{" "}
                    Print
                  </a>
                </div>
                {/* <i class="fa-solid fa-circle-check"></i> */}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
