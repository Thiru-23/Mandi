import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../Components.css";
export const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role:"",
  });
  let history = useHistory();
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, password, role } = user;
    let fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/farmer/fsignup`;
    if (role === "farmer") {
      fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/farmer/fsignup`;
    } else if (role === "merchant") {
      fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/merchant/msignup`;
    }
    const res = await fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        password,
      }),
    });
    
    if (!res.ok) {
      const text = await res.text();
      console.error("Error response from server:", text);
      window.alert("Something went wrong. Please try again.");
      return;
    }
    
    const data = await res.json();
    
    // if (data.status === 400 || !data) {
    // } else {
    // }
    if (data.success && role === "farmer") {
      window.alert("Registration Successfull");
      history.push("/login");
    } else if (data.success && role === "merchant") {
      window.alert("Registration Successfull");
      history.push("/login");
    } else {
      window.alert("Invalid Credential");
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow  overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h3 className="card-title text-center fs-3">Register</h3>
                <form method="POST">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleInputs}
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      placeholder="myusername"
                      required
                    />
                    <label htmlFor="name">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      onChange={handleInputs}
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      onChange={handleInputs}
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      placeholder="1234567890"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      onChange={handleInputs}
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="mb-3">
                    <label class="my-3 me-3 mx-2" for="role">
                      Role :
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={user.role}
                      onChange={handleInputs}
                      class="custom-select my-1 mr-sm-2"
                    >
                      <option selected>Choose...</option>
                      <option value="farmer">Farmer</option>
                      <option value="merchant">Merchant</option>
                    </select>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      onClick={PostData}
                    >
                      Register
                    </button>
                  </div>
                  <Link
                    className="d-block text-center mt-2 small smalltext"
                    to="/login"
                  >
                    Have an account? Login
                  </Link>

                  <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign up with
                      Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
