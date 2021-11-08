                                                        //Arrays//


/**Son una estructura de datos que nos permiten guardar mas valores dentro de ellos */

   //La sintaxis de un Array es: 

   //    var + nombre de la variable = [];   //

   //Ejemplo:

   var frutas = []; //Esto es un array, y para acceder a el debo hacerlo llamandolo por su nombre en este caso (frutas).


   var frutas =["Manzana","Platano", "Cereza","Fresa"]; //Si quiero saber el contenido de mi array debo llamarlo por su nombre

   console.log (frutas); //Aquí estoy mandando a llamar al array y va a imprimir todos los elementos que estén dentro de el



                        /**¿Cómo saber si un array tiene elementos en su interior si yo no lo cree? */



//Utilizar la palabra reservada .length para conocer los elementos, ademas de el tamaño de mi array


console.log(frutas.length); //Mostrara el 4 que es el total de elementos en mi array



/**Para acceder a cada uno de los elementos del array debo conocer su posicion y siempre empieza en la posicion 0. En este caso si 
 * qusiera acceder al elemento Cereza es la posicion 2 y se haria de esta manera:
  */


 var frutas =["Manzana","Platano", "Cereza","Fresa"];


console.log(frutas[2]); // accede al elemnto cereza que esta en la posicion 2 de mi array




   /**Existen algunos metodos que nos permiten modificar nuestros arrays ya sea para egragar o quitar elementos, son los siguientes: */



//Para agregar elementos: 


var frutas =["Manzana","Platano", "Cereza","Fresa"];


//Debemos crear una variable para nuestro metodo que agregue frutas al array

var masFrurtas= frutas.push("Uvas"); //La palabra reservada push agrega el elemento Uvas al final del array

//Mnadando a llamar al array

frutas

var frutas =["Manzana","Platano", "Cereza","Fresa", "Uvas"]; //ahora aparece el elemnto Uvas al final del array



//Para quitar el elemento final del array:

var frutas =["Manzana","Platano", "Cereza","Fresa", "Uvas"]; 


//Crear la variable para utilizar el metodo que quita elementos al final de un array

var menosFrutas=frutas.pop("Uvas");//Ahora quita el elemento final (Uvas) del array


frutas


var frutas =["Manzana","Platano", "Cereza","Fresa"]; //Quita el elemento (Uvas) del final del array



                /**Para agregar o quitar elementos al inicio de un array */

//Agergar al inicio del array:

var frutas =["Manzana","Platano", "Cereza","Fresa"];

//crea la variable que permite utilizar el metodo para agregar al inicio


var nuevaLongitud=frutas.unshift("Uvas"); //La palabra reservada unshift es la que permite agregar el elemento al inicio del array


var frutas =["Uvas","Manzana","Platano", "Cereza","Fresa"]; //Agrega uvas al inicio del array


//Quitar al inicio del array


var frutas =["Uvas","Manzana","Platano", "Cereza","Fresa"];


//Crear la variable para usar el metodo de quitar al inicio del array


var borrarFruta=fruta.shift("Uvas");


var frutas =["Manzana","Platano", "Cereza","Fresa"]; //Quita uvas al inicio del array





                  /**Para conocer la posicion del elemento en un array si solo conozco su nombre: */



//Crea la variable para usar el metodo index.Of que es el que permite conocer la posicion en el array

var frutas =["Manzana","Platano", "Cereza","Fresa"];



var posicion=frutas.indexOf("Cereza");

(2) //Regresa un 2 que es la posicion que tiene el elemento Cereza en un array










