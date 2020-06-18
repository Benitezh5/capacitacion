import React from 'react'

 function Maps(){

    var numbers = [4, 9, 16, 25];
    var x = numbers.map(Math.sqrt);
    console.log(x);

    //////////////carlos
    numbers.map((data, index) => {
      console.log(
        `Estamos en el elemento ${index}, su valor es ${data} y su raiz cuadrada es ${Math.sqrt(
          data
        )}`
      );
    });

   console.log(numbers);
    return (<div className = "Maps">
    <header className = "Maps-header">

    <p> Este es el Maps </p>


</header> 

</div>
);

}
export default Maps;