import React from "react";
//import HolaMundo from "../holamundo";
import Filter from "../../components/filter";
import Maps from "../../components/maps";
import Reduce from "../../components/reduce";
import Iterator from "../../components/iterator";


const Main = () => {

    return (
    <div>
        {/*Soy el main 
        <HolaMundo name="Humberto" age={28}/>
        <HolaMundo name="Carlos" age={34} hobby="Programar" />
      */}
        {/*
            <Filter name="Humberto" age={28}/>
        <Filter name="Carlos" age={34} hobby="Programar" />
        */}
        {/* <Reduce name="Humberto" age={28}/>
        <Reduce name="Carlos" age={34} hobby="Programar" />*/}

       {/* <Map name="Humberto" age={28}/>
        <Map name="Carlos" age={34} hobby="Programar" />*/}

    {/*  <Maps/> 
     <Filter/> 
     <Reduce/> */}
     <Iterator/>
     
    
    </div>
        )
    

}

/*let obj = {
    nombre: "Humberto",
    edad: 28,

  }

  console.table(obj);
  console.log(`Hola mi nombre es: ${obj.nombre}`);
  console.log(`Mi edad es: ${obj.edad}`);
*/



export default Main; 