import React from "react";

const HolaMundo = (props) => {
    const {name, age, hobby} = props
    return (
        <div>
        {/*<div>Hola soy {propsname} .y tengo {props.age} y mi hobby es {props.hobby} </div>
        */}
        <div>Hola soy {name} y tengo {age} y mi hobby es {hobby} </div>

        </div>
    )
 

}

export default HolaMundo;