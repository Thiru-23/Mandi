import react from "react";
import NoteContext from "./CropContext";
import { useHistory } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
  // const host = "http://localhost:8000";

  const initialnotes = [];
  const [crops, setCrops] = useState(initialnotes);
  const [dashcrops, setdashCrops] = useState(initialnotes);
  const [forbidcrops, setforbidCrops] = useState(initialnotes);
  const [getlist, setgetList] = useState(initialnotes);
  const [mcurrcrops, setmcurrCrops] = useState(initialnotes);
  const [mdashcrops, setmdashCrops] = useState(initialnotes);
  let history = useHistory();
  //Get All current crops
  const getCrops = async () => {
    //API
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    //console.log(json);
    setCrops(json);
  };

  const getforbidCrops = async () => {
    //API
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/forbid`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(json);
    setforbidCrops(json);
  };

  const getFdash = async () => {
    //API

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(localStorage.getItem("token"));
    console.log(json);
    setdashCrops(json);
  };

  //Add New Note
  const addCrop = async (name, address, plotno, weight, market, image) => {
    let url = `${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/addcrop`;
    //API
    console.log(image, "nameeee:");
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("cropName", name);
    formdata.append("address", address);
    formdata.append("market", market);
    formdata.append("weight", weight);
    formdata.append("plotno", plotno);
    try {
      let resp = await axios.post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",

          auth: localStorage.getItem("token"),
        },
      });

      if (resp.status === 200) {
        window.alert("New Crop Added Successfull");

        window.location.reload();
      }
    } catch (error) {
      window.alert("Failed");
      console.log(error);
    }

    /* const response = await fetch("/api/sell/farmer/addcrop", {
      method: "POST",
      body: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0MGJhYmVkOGIyOGE5MzYzOWFjNDBhIn0sImlhdCI6MTY0ODc5NDM2NX0.qp7L1j6kSKa03_bqpbicP92AM9T4FIbpjcgn1TBy88o"
          
      },
       // body data type must match "Content-Type" header
    });
    const crop= await response.json(); // parses JSON response into native JavaScript objects
    if(crop.success){
      window.alert("New Crop Added Successfull");
      history.push("/fdashboard");
    }
    else{
      window.alert("Failed");
      history.push("/addcrop");
    } */

    // const note = {
    //   _id: "6207771315f6d8891d409859",
    //   user: "61fd5073174cac209dea8d7a",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2022-02-08T15:32:04.135Z",
    //   __v: 0,
    // };

    //setCrops(crops.concat(crop));
  };
  const getlistMarket = async (market) => {
    //API
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
        market: market,
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(json);
    setgetList(json);
  };

  /* const bidCrop = async (id,price) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`/api/buy/merchant/list/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth":localStorage.getItem('token'),
      },
      body: JSON.stringify({price})
    });

    const note = await response.json();
    console.log(note);
    
  } */
  const getmCurrent = async () => {
    //API
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth":
        localStorage.getItem('token'),
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    //console.log(json);
    setmcurrCrops(json);
  };
  //Delete Note
  const deleteCrop = async (id) => {
    if (window.confirm("Are you Sure You Want to Delete")) {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/deletecrop/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          auth: localStorage.getItem("token"),
        },
      });
      // const json= response.json(); // parses JSON response into native JavaScript objects
      const json = await response.json();
      console.log(json);
      // setCrops(json);
      console.log("delete note with id" + id);
      const newCrop = crops.filter((note) => {
        return note._id !== id;
      });
      setCrops(newCrop);
      if(response.status==200){
      window.alert("Crop Deleted Successfull");
      window.location.reload();
      // history.push("/addcrop");
      // getCrops();
    }
      else{
        window.alert("Not deleted Try Again");
      }
      // window.location.reload();
    }
  };
  const getMdash = async () => {
    //API

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/buy/merchant/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(localStorage.getItem("token"));
    console.log(json);
    setmdashCrops(json);
  };
  //Update
  const editCrop = (id, cropName, address, plotno, weight, market) => {
    //API
    const response = fetch(`${process.env.REACT_APP_BACKEND_URL}/api/sell/farmer/updatecrop/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("token"),
      },

      body: JSON.stringify(cropName, address, plotno, weight, market), // body data type must match "Content-Type" header
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    if(response.status==200){
      window.alert("updated");
      window.location.reload();
    }
    else{
      window.alert("not updated try again");

    }
    // for (let index = 0; index < crops.length; index++) {
    //   const element = crops[index];
    //   if (element._id === id) {
    //     element.cropName = cropName;
    //     element.address = address;
    //     element.plotno = plotno;
    //     element.weight = weight;
    //     element.market = market;
    //   }
    // }

    // ALL Merchant api calls.
  };
  return (
    <NoteContext.Provider
      value={{ crops, dashcrops,forbidcrops,getlist,mcurrcrops,mdashcrops, setCrops, addCrop, getFdash, getforbidCrops,getlistMarket,getmCurrent, editCrop,deleteCrop, getCrops,getMdash }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
