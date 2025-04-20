import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Components.css";
export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password ,role} = user;
    let fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/farmer/flogin`;
    if (role === "farmer") {
      fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/farmer/flogin`;
    } else if (role === "merchant") {
      fetchUrl = `${process.env.REACT_APP_BACKEND_URL}/api/merchant/mlogin`;
    }
    const res = await fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await res.json();
    console.log(json.authToken);
    if (json.success &&  role === "farmer") {
      // Save the auth token and redirect
      localStorage.setItem("role", role);
      localStorage.setItem("token", json.authToken);
      window.alert("Login Successfull");
      history.push("/farmerdashboard");
    }
    else if (json.success &&  role === "merchant") {
      // Save the auth token and redirect
      localStorage.setItem("role", role);
      localStorage.setItem("token", json.authToken);
      window.alert("Login Successfull");
      history.push("/merchantdashboard");
    } 
    else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow  overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h3 className="card-title text-center  fs-3">Login</h3>
                <form method="POST">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      // onChange={handleInputs}
                      className="form-control"
                      onChange={handleInputs}
                      id="email"
                      name="email"
                      value={user.email}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      // onChange={handleInputs}
                      className="form-control"
                      onChange={handleInputs}
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
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>

                  <Link className="d-block text-center mt-2 small smalltext" to="/signup">
                    Haven't an account? Register
                  </Link>

                  <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Login with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Login with
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
