//import React from "react";
import React from 'react'


 function Filter() {
    const libros = ['Multiverso', 'Padre Rico, Padre Pobre', 'La Vaca', 'Harrison', 'Celulas Madres', 'Telomeros'];

    const result = libros.filter(libros => libros.length > 6);

    console.log(result);
    return (<div className = "Filter">
    <header className = "Filter-header">

    <p> Este es el Filter </p>




</header> 

</div>
);
    
 }

 


export default Filter;