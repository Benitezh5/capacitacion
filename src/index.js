import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Main from "./views/main";
//import Maps from './components/maps';
//import Filter from './components/filter';
//import Reduce from './components/reduce';
<<<<<<< HEAD
//import Hooks from './components/hooks';
import Axios from './components/axios';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <React.StrictMode >

   {/* <App/> */}
  {/* <Main/> */}
   {/* <Maps/> */}
     {/* <Filter/> */}
     {/* <Reduce/> */}
     {/* <Hooks/> */}
      <Axios/> 


    

    </React.StrictMode>,
    document.getElementById('root')
=======
import Hooks from "./components/hooks";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Main/> */}
    {/* <Maps/> */}
    {/* <Filter/> */}
    {/* <Reduce/> */}
    <Hooks />
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> 973b15335327f06e5f9ec85242b77e0e371a8ff9
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
