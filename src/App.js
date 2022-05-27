import './index.css';
import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Signup from "./buttons/Signup";
import Signin from "./buttons/SignIn";
import Header from "./components/Header";
import Homepage from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
         <Routes>      
           <Route exact path ="/" element = {<Homepage/>}/>   
          <Route exact path="/Signin" element ={<Signin/>} />
          <Route ecact path = "/Signup" element ={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;