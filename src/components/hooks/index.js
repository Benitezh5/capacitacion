import React,{useState,useEffect} from 'react';

var contador = 0;


 
export default ;

const Hooks = () => {
    //Todos los hooks se ejecutan aca.

    const  [contador_hooks, setContador_hooks]= useState(1) //descontruccion
    const  [nombre, setNombre]= useState("Humberto")

    useEffect(() => {
    console.log(`%c Estoy en el useEffect`,`color: #0000ff; text-transform:uppercase;`);
    return()=> {
        console.log(`%c Estoy antes que se desmonte el componente`,`color: #00ff00; text-transform:uppercase;`);
    }
})
console.log(`%c Estoy antes del render`,`color: #ff0000; text-transform:uppercase;`);

const cambiar_nombre = (data) =>{
    console.log(data.target.value);
    setNombre(data.target.value);
}

return ( 
    <div>{contador_hooks}
    <div>
        <button onClick={() =>{setContador_hooks(contador_hooks+1)}}>+</button>
        <button onClick={() =>{setContador_hooks(contador_hooks-1)}}>-</button>
    </div>
    <div>
        <input type="text" value={nombre} onChange={(e) =>{cambiar_nombre(e)}} />
    </div>

    </div> 
);
}
 
export default Hooks;

//React tiene ciclo de vida 
//state se mantiene quieto
//renderiza, busca cambio, despues vuelve a renderizar
//componente montadous
//useState es como ejemplo de ajax estudiarlo! 

