import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpForm } from "./Components/Login_SignUp_Forms/SignUpForm";
import { LoginForm } from "./Components/Login_SignUp_Forms/LoginForm";
import { Navbar } from "./Components/nav links/CNav";

import { Hero } from "./Components/hero-section/CHero";
import { FDashboard } from "./Components/Dashboard/FDashboard";
import { MDashboard } from "./Components/Dashboard/MDashboard";
import Addnote from "./Components/AddCrops";
import CropState from "./Context/Crops/CropState";
import { Card } from "./Components/card/Ccard";
import Notes from "./Components/Crops";
import { Header } from "./Components/Header";
import Realdashboard from "./Components/Realdash";
import { Mheader } from "./Components/Mheader";
import Buycrop from "./Components/Buycrop";
import { Footer } from "./Components/footer";
import { About } from "./Components/About";
import Mcurrent from "./Components/Mcurrent";
import Mdashboard from "./Components/Mdashboard";
function App() {
  return (
    <div>
      <CropState>
        <Router>
          <Navbar />
          {/* <Alert/> */}
          <div className="scrollbar scrollbar-black bordered-black square thin">
            <div className="force-overflow"></div>
            <Switch>
              <Route exact path="/">
                <Hero />
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/signup">
                <SignUpForm />
              </Route>
              <Route exact path="/farmerdashboard">
                <Header/>
                 <Realdashboard/>
              </Route>
              <Route exact path="/current">
                <Header/>
                 <Notes/> 
                {/* <Card/> */}
              </Route>
              
              <Route exact path="/addcrop">
                <Header/>
                <Addnote />
              </Route>
              <Route exact path="/merchantdashboard">
                <Mheader/>
               <Mdashboard/>
              </Route>
              <Route exact path="/mcurrent">
                {/* <MDashboard /> */}
                <Mheader/>
                <Mcurrent/>
              </Route>
              <Route exact path="/buycrop">
                {/* <MDashboard /> */}
                <Mheader/>
                <Buycrop/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </Router>
      </CropState>
    </div>
  );
}

export default App;
