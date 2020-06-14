import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  console.log("Visualizando cambio");

  console.log("probando 2");
    
    //Matriz
    //====================================================================================
    console.log("================================= Matriz =====================================");
    var num = "Hola Carlos";
    var matriz = [1, 3, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(matriz);
    //====================================================================================
    
    console.log("================================== Concat ===================================");
    /* 
    Definición y uso
    El método se utiliza para unir dos o más matrices.concat()
    Este método no cambia las matrices existentes, pero devuelve una nueva matriz, que contiene los valores de las matrices unidas.
    */

    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var children = hege.concat(stale); 
    console.log(children);

     //====================================================================================
    console.log("================================constructor===================================");
     /*Definición y uso
    En JavaScript, la propiedad devuelve la función constructora de un objeto.constructor

    El valor devuelto es una referencia a la función, no el nombre de la función:

    Para las matrices de JavaScript, la propiedad constructor devuelve la función Array() á [código nativo]

    Para los números de JavaScript, la propiedad constructor devuelve la función Number() á [código nativo]

    Para las cadenas de JavaScript, la propiedad constructor devuelve la función String() á [código nativo]

    Puede utilizar la propiedad constructor para comprobar si una variable es una matriz.*/ 
    
    var paises =["El Salvador", "Costa Rica", "Suiza", "Alemania", "Rusia"];
    console.log(paises);

    //====================================================================================
    console.log("================================copyWithin()==================================");
    /*Definición y uso
    El método copia los elementos de matriz en otra posición de la matriz, sobrescribiendo los valores existentes.copyWithin()

    Este método nunca agregará más elementos a la matriz.

    Nota: este método sobrescribe la matriz original. */
    var paises2 = ["China", "Japon", "Finlandia", "Irlanda", "Canada"];
    console.log(paises2.copyWithin(2,0));

    //====================================================================================
    console.log("================================entries()==================================");
    /*Definición y uso
    El método devuelve un objeto Iterator de matriz con pares clave/valor.entries()

    Para cada elemento de la matriz original, el nuevo objeto de iteración contendrá una matriz con el índice como clave y el valor del elemento como valor:

    [0, "Banana"]
    [1, "Orange"]
    [2, "Apple"]
    [3, "Mango"]

    Nota: Este método no cambia la matriz original. */
    var amigos= ["Milly", "Regi", "Jesus", "Vanessa"];
    console.log(Object.entries(amigos));

    //====================================================================================
    console.log("================================every()==================================");
    /*Definición y uso
    El método comprueba si todos los elementos de una matriz pasan una prueba (proporcionada como una función).every()

    El método every() ejecuta la función una vez para cada elemento presente en la matriz:

    Si encuentra un elemento de matriz donde la función devuelve un valor false, every() devuelve false (y no comprueba los valores restantes)
    Si no se produce false, every() devuelve true
    Nota: every() no ejecuta la función para elementos de matriz sin valores.

    Nota: every() no cambia la matriz original */
    const age = (currentValue) => currentValue < 30; //si el numero es mayor que todos los numeros del arregls siempre sera true.
    var edad =[26, 28, 24, 25];
    console.log(edad.every(age));

    //====================================================================================
    console.log("================================fill()==================================");
    /*Definición y uso
    El método rellena los elementos especificados en una matriz con un valor estático.fill()

    Puede especificar la posición de dónde iniciar y finalizar el relleno. Si no se especifica, se rellenarán todos los elementos.

    Nota: este método sobrescribe la matriz original. */
    var celulares= ["Samsung", "Huawei", "Apple", "Xiaomi"];
    console.log(celulares.fill("one Plus",3, 4)); //Estudiarlo!!!!!!!!!!!!!!!!!!!!!!!!! 

    //====================================================================================
    console.log("================================filter()==================================");
    /*Definición y uso
    El método filter() crea una matriz llena de todos los elementos de matriz que pasan una prueba (proporcionada como una función).

    Nota: filter() no ejecuta la función para elementos de matriz sin valores.

    Nota: filter() no cambia la matriz original. */
    const libros = ['Multiverso', 'Padre Rico, Padre Pobre', 'La Vaca', 'Harrison', 'Celulas Madres', 'Telomeros'];

    const result = libros.filter(libros => libros.length > 6);

    console.log(result);

    //====================================================================================
    console.log("==================================find()=================================");
    /*Definición y uso
    El método devuelve el valor del primer elemento de una matriz que pasa una prueba (proporcionada como una función).find()

    El método find() ejecuta la función una vez para cada elemento presente en la matriz:

    Si encuentra un elemento de matriz donde la función devuelve un valor true, find() devuelve el valor de ese elemento de matriz (y no comprueba los valores restantes)
    De lo contrario, devuelve undefined
    Nota: find() no ejecuta la función para matrices vacías.

    Nota: find() no cambia la matriz original.   */
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    console.log(found);

    //====================================================================================
    console.log("==================================findIndex()=================================");
    /*Definición y uso
    El método devuelve el índice del primer elemento de una matriz que pasa una prueba (proporcionada como una función).findIndex()

    El método findIndex() ejecuta la función una vez para cada elemento presente en la matriz:

    Si encuentra un elemento de matriz donde la función devuelve un valor true, findIndex() devuelve el índice de ese elemento de matriz (y no comprueba los valores restantes)
    De lo contrario, devuelve -1
    Nota: findIndex() no ejecuta la función para elementos de matriz sin valores.

    Nota: findIndex() no cambia la matriz original.  */

    const array2 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(array2.findIndex(isLargeNumber));

    
    //====================================================================================
   
    console.log("==================================forEach()=================================");
     /*Definición y uso
    El método llama a una función una vez para cada elemento de una matriz, en orden.forEach()

    Nota: la función no se ejecuta para elementos de matriz sin valores. */
    const abecedario = ['a', 'b', 'c'];

    abecedario.forEach(element => console.log(element));

    //==========================================from==========================================
    console.log("==================================from()=================================");
    /*Definición y uso
    El método Array.from() devuelve un objeto Array de cualquier objeto con una propiedad length o un objeto iterable. */

    var abecedario2 = Array.from("ABCDEFG");
    console.log(abecedario2);

     //====================================================================================
     console.log("==================================includes()=================================");
     /*Definición y uso
      El método includes() determina si una matriz contiene un elemento especificado.

     Este método devuelve true si la matriz contiene el elemento y false si no.

      Nota: El método includes() distingue mayúsculas de minúsculas.

      */

     const numeros = [1, 2, 3];

    console.log(numeros.includes(2));
    // se espera como resultado true

    const animales = ['cat', 'dog', 'bat'];

    console.log(animales.includes('cat'));
    // se espera como resultado true

    console.log(animales.includes('at'));
    // se espera como resultado false
    
     //====================================================================================
     console.log("==================================indexOf()=================================");
     /*Definición y uso
    El método indexOf() busca en la matriz el elemento especificado y devuelve su posición.

    La búsqueda comenzará en la posición especificada, o al principio si no se especifica ninguna posición inicial, y finalizará la búsqueda al final de la matriz.

    Devuelve -1 si no se encuentra el elemento.

    Si el elemento está presente más de una vez, el indexOf método devuelve la posición de la primera aparición.

    Nota: El primer elemento tiene la posición 0, el segundo elemento tiene la posición 1, y así sucesivamente.

    Consejo: Si desea buscar de extremo a principio, utilice el método lastIndexOf() */

    var sistemas = ["Linux", "Window", "Mac", "IOS"];
    var a = sistemas.indexOf("Android");
    console.log(a);

    //====================================================================================
    console.log("==================================isArray()=================================");
    /*Definición y uso
    El método isArray() determina si un objeto es una matriz.

    Esta función devuelve true si el objeto es una matriz y false si no. */
    var herramientas= ["taladro", "pulidora", "Multimetro", "Amperimetro"];
    console.log(Array.isArray(herramientas));

    //====================================================================================
    console.log("==================================join()=================================");
    /*Definición y uso
    El método devuelve la matriz como una cadena.join()

    Los elementos se separarán mediante un separador especificado. El separador predeterminado es coma (,).

    Nota: este método no cambiará la matriz original. */

    var universidades= ["Ues", "Utec", "Uca", "Ufg"];
    var energy = universidades.join();
    console.log(energy);

    //====================================================================================
    console.log("==================================keys()=================================");
    /*Definición y uso
    El método devuelve un objeto Array Iterator con las claves de una matriz.keys()

    Nota: este método no cambia la matriz original. */
    const arrayabc = ['a', 'b', 'c'];
    const iterator = arrayabc.keys();
    
    for (const key of iterator) {
      console.log(key);
    }
    
    //====================================================================================
    console.log("==================================length()=================================");
    /*Definición y uso
    La propiedad establece o devuelve el número de elementos de una matriz.length */
    var cantidadfruta = ["Banana", "Orange", "Apple", "Mango"];
    console.log(cantidadfruta.length);

    //====================================================================================
    console.log("==================================lastIndexOf()=================================");
      /*Definición y uso
       El método lastIndexOf() busca en la matriz el elemento especificado y devuelve su posición.

      La búsqueda comenzará en la posición especificada, o al final si no se especifica ninguna posición inicial, y finalizará la búsqueda al principio de la matriz.

      Devuelve -1 si no se encuentra el elemento.

      Si el elemento que se va a buscar está presente más de una vez, el lastIndexOf método devuelve la posición de la última aparición.

      Consejo: Si desea buscar de principio a fin, utilice el método indexOf() */
    var fruits77 = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits77.lastIndexOf("Apple"));

    //====================================================================================
    console.log("==================================map()=================================");
    /*Definición y uso
    El método crea una nueva matriz con los resultados de llamar a una función para cada elemento de matriz.map()

    El método llama a la función proporcionada una vez para cada elemento de una matriz, en orden.map()

    Nota: no ejecuta la función para elementos de matriz sin valores.map()

    Nota: este método no cambia la matriz original. */
    var numbers = [4, 9, 16, 25];
    var x = numbers.map(Math.sqrt);
    console.log(x);
    //====================================================================================
    console.log("==================================pop()=================================");
    var fruits5 = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits5.pop());
    //====================================================================================
    //console.log("==================================prototype()=================================");
    /*nstructor prototipo permite agregar nuevas propiedades y métodos al objeto Array().

    Al construir una propiedad, TODAS las matrices tendrán la propiedad y su valor, como valor predeterminado.

    Al construir un método, TODAS las matrices tendrán este método disponible.

    Nota: Array.prototype no hace referencia a una sola matriz, sino al propio objeto Array().

    Nota: Prototype es un constructor de objetos global que está disponible para todos los objetos JavaScript. */
                                                  // Arreglar!!!!!!!!
    /* Array.prototype.myUcase = function() {
        var i;
        for (i = 0; i < this.length; i++) {
          this[i] = this[i].toUpperCase();
        }
      };
      
      function myFunction() {
        var personas = ["Andrea", "Karla", "Rocio", "Angela"];
        console.log(personas.myUcase());
      }
     */ 
    //====================================================================================
    console.log("==================================push()=================================");
    /*Definición y uso
    El método push() agrega nuevos elementos al final de una matriz y devuelve la nueva longitud.

    Nota: Los nuevos elementos se agregarán al final de la matriz.

    Nota: Este método cambia la longitud de la matriz.

    Consejo: Para añadir elementos al principio de una matriz, utilice el método unshift(). */

    var fruitas23 = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruitas23.push("Kiwi", "Fresa"));
    //====================================================================================
    console.log("==================================reduce()=================================");
    /*Definición y uso
    El método reduce la matriz a un solo valor.reduce()

    El método ejecuta una función proporcionada para cada valor de la matriz (de izquierda a derecha). reduce()

    El valor devuelto de la función se almacena en un acumulador (resultado/total).

    Nota: no ejecuta la función para elementos de matriz sin valores. reduce()

    Nota: este método no cambia la matriz original. */
    const array12345 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // 1 + 2 + 3 + 4
    console.log(array12345.reduce(reducer));
    // expected output: 10
    
    // 5 + 1 + 2 + 3 + 4
    console.log(array12345.reduce(reducer, 5));
    // expected output: 15
    //====================================================================================
    //console.log("==================================reduceRight()=================================");
   /* Definición y uso
    El método reduce Elmétodo reduce la matriz a un único valor.

    El método reduceRight() ejecuta una función proporcionada para cada valor de la matriz (de derecha a izquierda).

    El valor devuelto de la función se almacena en un acumulador (resultado/total).

    Nota: reduceRight() no ejecuta la función para elementos de matriz sin valores.
    var numbers = [175, 50, 25];

    document.getElementById("demo").innerHTML = numbers.reduceRight(myFunc);

    function myFunc(total, num) {
    return total - num;
    }
   */
    //====================================================================================
    console.log("==================================reverse()=================================");
    /*Definición y uso
    El método invierte el orden de los elementos de una matriz.reverse()

    Nota: este método cambiará la matriz original. */

    const array66 = ['one', 'two', 'three'];
    console.log('array1:', array1);
    // expected output: "array1:" Array ["one", "two", "three"]

    const reversed = array66.reverse();
    console.log('reversed:', reversed);
    // expected output: "reversed:" Array ["three", "two", "one"]

    // Careful: reverse is destructive -- it changes the original array.
    console.log('array1:', array66);
    // expected output: "array1:" Array ["three", "two", "one"]

    //====================================================================================
    console.log("==================================shift()=================================");
    /*Definición y uso
      El método quita el primer elemento de una matriz.shift()

      Nota: Este método cambia la longitud de la matriz.

      Nota: El valor devuelto del método shift es el elemento eliminado.

      Consejo: Para eliminar el último elemento de una matriz, utilice el método pop().

      Nota: este método cambiará la matriz original.

 */
    var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

    console.log('miPescado antes: ' + miPescado);
    // "miPescado antes: ángel,payaso,mandarín,cirujano"

    var eliminado = miPescado.shift(); 

    console.log('miPescado después: ' + miPescado); 
    // "miPescado after: payaso,mandarín,cirujano" 

    console.log('Elemento eliminado: ' + eliminado); 
    // "Elemento eliminado: ángel"


    //====================================================================================
    console.log("==================================slice()=================================");
      /*Definición y uso
      El método slice() devuelve los elementos seleccionados en una matriz, como un nuevo objeto de matriz.

      El método slice() selecciona los elementos que comienzan en el argumento start dado y termina en el argumento end dado, pero no incluye.

      Nota: La matriz original no se cambiará. */
    var cadena1 = "La mañana se nos echa encima.";
    var cadena2 = cadena1.slice(3, -2);
    console.log(cadena2); 

    //====================================================================================
    console.log("==================================some()=================================");
    /*Definición y uso
      El método some() comprueba si alguno de los elementos de una matriz supera una prueba (proporcionada como función).

      El método some() ejecuta la función una vez para cada elemento presente en la matriz:

      Si encuentra un elemento de matriz donde la función devuelve un valor true, some() devuelve true (y no comprueba los valores restantes)
      De lo contrario, devuelve false
      Nota: some() no ejecuta la función para elementos de matriz sin valores.

      Nota: some() no cambia la matriz original. */
    const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    // expected output: true

    //====================================================================================
    console.log("==================================sort()=================================");
    /*Definición y uso
      El método sort() ordena los elementos de una matriz.

      El criterio de ordenación puede ser alfabético o numérico, y ascendente (arriba) o descendente (abajo).

      De forma predeterminada, el método sort() ordena los valores como cadenas en orden alfabético y ascendente.

      Esto funciona bien para las cuerdas ("Apple" viene antes de "Banana"). Sin embargo, si los números se ordenan como cadenas, "25" es mayor que "100", porque "2" es mayor que "1".

      Debido a esto, el método sort() producirá un resultado incorrecto al ordenar números.

      Puede solucionar esto proporcionando una "función de comparación" (consulte "Valores de parámetro" a continuación).

      Nota: Este método cambia la matriz original. */
    var number12 = [4, 2, 5, 1, 3];
    number12.sort(function(a, b) {
    return a - b;
    });
    console.log(number12);
    //====================================================================================
    console.log("==================================splice()=================================");
    /*Definición y uso
      El método splice() agrega/elimina elementos a/desde una matriz y devuelve los elementos eliminados.

      Nota: Este método cambia la matriz original. */

    const meses = ['Jan', 'March', 'April', 'June'];
    meses.splice(1, 0, 'Feb');
    // inserts at index 1
    console.log(meses);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    meses.splice(4, 1, 'May');
    // replaces 1 element at index 4
    console.log(meses);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]

    //====================================================================================
    console.log("==================================toString()=================================");
    /*Definición y uso
      El método devuelve una cadena con todos los valores de matriz, separados por comas.toString()

      Nota: Este método no cambiará la matriz original. */
    var transporte = ["Carro", "Bus", "Tren", "Avion"];
    var x2 = transporte.toString();
    console.log(x2);

    //====================================================================================
    console.log("==================================unshift()=================================");
    /*Definición y uso
      El método unshift() agrega nuevos elementos al principio de una matriz y devuelve la nueva longitud.

      Nota: Este método cambia la longitud de una matriz.

      Consejo: Para agregar nuevos elementos al final de una matriz, utilice el método push(). */
    var profesiones = ["Ing civil", "Ing Sistemas", "Medicina", "Ing Industrial"];
    console.log(profesiones.unshift("Lic Administracion","Lic Economia"));

    //====================================================================================
    console.log("==================================valuOf()=================================");
      /*Definición y uso
      El método valueOf() devuelve la matriz.

      Este método es el método predeterminado del objeto de matriz. Array.valueOf() devolverá lo mismo que Array

      Nota: Este método no cambiará la matriz original. */
    var colegios = ["Ricaldone", "Don Bosco", "Alemana", "Panamericana"];
     console.log(colegios.valueOf());



    return (<div className = "App">
        <header className = "App-header">

        <p> Edit <code> src / App.js </code> and save to reload. </p>
       -1 La variable es {num}  


      
        </header> 
       
        </div>
    );

}

export default App;