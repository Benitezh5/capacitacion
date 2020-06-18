import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Consulta= () =>{
const url="https://wiserlearningcenter.com/plataforma/wp-json/wp/v2/users/?per_page=100";

const  [users, setUsers]= useState([]) //array vacio //el primer argumento es la variable //segundo argumento es la funcion que actualiza la variable de este hooks

useEffect( 
    () =>{
        //vamos a consumir la api de Wiser
        //Vamos usar el metodo get
        axios.get(url)
        .then((response) =>{
           // console.log(response);
            setUsers(response.data)
        })
        .catch((error) =>{  //es para saber el error 
            console.log("El error es: ",error); 
        }) 
    } 
    ,[users]
) 

console.log(users,users.length);

return(
    <div>
        <h3>Consultando</h3>
        {
            users.map((alumno, index) =>{
                return(
                    <div keys={index}>
                       {alumno.id} - {alumno.name} - {alumno.user_email} 
                    </div>
                )

            })
        }
    </div>)
}



export default Consulta;


//axios manejar url 
//Los objetos tiene funciones y le llamamos metodos
//los objetos tienen variables y les llamamos propiedades
//las funciones modifican datos
//las propieades son variables
//las variables guardan datos
//metodos son funciones

