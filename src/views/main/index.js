import React from "react";
import HolaMundo from "../holamundo";


const Main = () => {

    return (
    <div>Soy el main 
        <HolaMundo name="Humberto" age={28}/>
        <HolaMundo name="Carlos" age={34} hobby="Programar" />
    
    
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