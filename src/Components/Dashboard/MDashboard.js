import React from 'react'
import { Link } from "react-router-dom";
export const MDashboard = () => {
  return (
    <>
    <div className="container d-flex justify-content-center my-5 bg-dark text-white text-center">
        <div className="">

        <h1 className="my-5">Welcome to Merchant Dashboard</h1>
        <h3 className='my-5'>Login Successful</h3>
        <button className="btn btn-success">
           <Link  to="/addcrop">Add New Crop</Link>     
              </button>
        </div>
    </div>
    </>
  )
}
