import React from 'react';
import Navigation from "./Components/Navigation";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageLinkForm from "./Components/ImageLinkForm";
import SignIn from "./Components/SignIn";
import "./App.css";
import Register from "./Components/Register";
import {SignInProvider} from "./Contexts/SignInContext";
import {InputProvider} from "./Contexts/InputContext";
import Particles from 'react-particles-js';
import Rank from "./Components/Rank";
import FaceRecognition from "./Components/FaceRecognition";


const particlesProps = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 10
      }
    },
    number: {
      value: 80,
      density:{
        enable:false,
        value_area:800
      }
    }
  }
};

const  App = () => {
  return (
      <div className="App">
        <Router>
          <InputProvider>
          <SignInProvider>
            <Switch>
              <Route exact path="/">
                <Particles className="particles" params={particlesProps}/>
                <SignIn/>
                </Route>
              <Route exact path="/register" component ={Register}/>
            </Switch>
            <Route exact path="/app">
              <Particles className="particles" params={particlesProps}/>
              <Navigation/>
              <Rank/>
              <ImageLinkForm/> 
              <FaceRecognition/>
            </Route>
          </SignInProvider>
          </InputProvider>
      </Router>  
 
      </div>
  );
}

export default App;
