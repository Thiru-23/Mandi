import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../Context/Crops/CropContext";
// import cropimg from "../../Backend/images/"
const BuyCard = (props) => {
  const context = useContext(noteContext);
  const { bidCrop } = context;
  const [value, setValue] = useState("");
  const [high, setHigh] = useState("");
  let history = useHistory();
  const { crop } = props;
  let date = crop.date;
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleClick = async () => {
   
    console.log(crop._id);
    console.log(value);
    const price = value;
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/list/${crop._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
      body: JSON.stringify({ price }),
    });

    const note = await response.json();
    console.log(response.status);
    if (response.status === 200) {
      window.alert("Bid successfully");
      history.push("/mcurrent");
    } else {
      window.alert(note);
      history.push("/mcurrent");
      setValue(0);
    }
  };

  const higheat =async ()=> {
    const resp= await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/highestprice/${crop._id}`, {
    method: "GET",
    
  });
  
const rate = await resp.json();

setHigh(rate.highest);

  
  if (resp.status !== 200) {
    window.alert(rate);
    history.push("/buycrop");
  }
};

 higheat(); 
/* console.log(rate.highest); */
console.log(high);
  return (
    
    <section class="">
      <div class="container py-2">
        {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">
          My Cards Light
        </div> */}

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
                {new Date(date).toGMTString()}
              </time>
            </div>
            {/* <div class="postcard__bar"></div> */}
            <div class="postcard__preview-txt">
              <p>
                Crop: {crop.cropName} 
              </p>
              <p>Address: {crop.address}</p>
              <p> Market:{crop.market}</p>

              <p>
                Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
              </p>
              {console.log(high)}
              <p>Highest-bid: {high}</p>
              <p>Enter Bid Amount:
              <input
                type="number"
                onChange={onChange}
                className=" mx-4"
                id="price"
                name="price"
                value={value}
                placeholder="00"
              /></p>
            </div>
            <button
              className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
              type="submit"
              onClick={handleClick}
            >
              Bid
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BuyCard;
