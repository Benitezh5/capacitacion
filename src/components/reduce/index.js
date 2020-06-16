import React from 'react'


 function Reduce() {
    const array12345 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // 1 + 2 + 3 + 4
    console.log(array12345.reduce(reducer));
    // expected output: 10
    


    console.log(reducer);
    return (<div className = "Reduce">
    <header className = "Reduce-header">

    <p> Este es el Reduce </p>




</header> 

</div>
);
    
 }

 


export default Reduce;