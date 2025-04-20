import React from "react";
import { useContext, useState } from "react";
import noteContext from "../Context/Crops/CropContext";
import { useHistory } from "react-router-dom";
// import cropimg from "../../Backend/images/"
const AfterBidCard = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const [high, setHigh] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  let history = useHistory();
  const { crop } = props;
  /* const { crop, updateNote ,disply} = props; */
    let  date=crop.date
   console.log(crop._id); 
  const idd=crop._id;
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

  const handledealClick = async ()=>{
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/confirm/${idd}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
      
    });

    const crop = await response.json();
    console.log(response.status);
    if (response.status === 200) {
      window.alert("Deal successfull");
      history.push("/farmerdashboard");
    } else {
      window.alert(crop);
      history.push("/current");
      
    }
  }
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
              alt="Image Title"
            />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">
              {/* <a href="#">Podcast Title</a> */}
            </h1>
            <div class="postcard__subtitle  ">
              <time datetime="2020-05-25 12:00:00 ">
                <i class="fas fa-calendar-alt my-4 mx-1
                "></i>
               {new Date(date).toGMTString()}
              </time>
            </div>
            {/* <div class="postcard__bar"></div> */}
            <div class="postcard__preview-txt">
              <p>Crop: {crop.cropName} </p>
              <p>Address: {crop.address} </p>
              
              <p>
                Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
              </p>
              <p> Market:{crop.market}</p>
              <p style={{
                      "font-weight": "Bold",
                    }} >Highest-bid: {high }</p>
              <p>Current bid: {crop.price}</p>
            </div>
            <ul class="postcard__tagbox">
            <li class="tag__item play blue">
                <a href={`https://api.whatsapp.com/send?phone=${number} `} target="_blank" rel="noreferrer">
                <i class="fa fa-whatsapp" aria-hidden="true"></i> Chat with merchant 
                </a>
               {/*  <a href="https://api.whatsapp.com/send?phone=919795141300 " target="_blank" rel="noreferrer" class="whatsapp-link"><img class="whatsapp-link" src="whatsapp-link.png" alt=""> </a> */}

              </li>
              <li class="tag__item play green">
                
                <button
                    className="btn fw-bold text-uppercase  fa fa-check" 
                    type="submit"
                     onClick={handledealClick} 
                  >
                    {/* <i class="fa fa-check" aria-hidden="true"></i> Accept Deal */}
                    Accept Deal
                  </button>
               
                
              </li>
             {/*  <li class="tag__item play red">
                <a href="#">
                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                </a>
              </li> */}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AfterBidCard;
