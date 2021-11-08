/**El Hoisting solo se puede generar en las versiones anteriores de Emascript de el 5 para abajo, del 6 en adelante ya no se usa.
 * Esto hace referencia cuando las variables y las funciones se declaran antes de que se procese el código
 */

/**En el siguiente ejemplo es una muestra de un HOISTING porque primero mando a llamar a la variable antes de declararla e inicializarla */


console.log(miNombre);  //Primero mando a llamar a la variable

var miNombre="Erick"; // Después la inicializo

/**El valor en consola saldra como indefinido porque al interpretar el codigo sabe que hay una variable que es la que esta en el conslo.log
 * pero no esta inicizlizada porque no la detecta asi es que por ello de la un valor undefined, reservando ese espacio en la memoria
 * porque a final de cuentas sabe que lo necesita para declarar o inicializar ese valor
 */


/**En este ejemplo se puede ver aun mas claro como funciona el hoisting comenzamos declarando una variable indefinida 
 * (solo me reserva el espacio) y en la parte de abajo yo ya le estoy dando ese valor  a la variable, dicho de otra manera 
 * le estoy asignando el valor que estaba indefinido a la variable que declare con el nombre de Erick si lo haces en consola se puede ver
 * 
*/




var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Erick";


                                                 //Hoisting con Functions//


/**Si mandamos a llamar una funcion antes de declararla si se puede obtener el resultado que deseamos siempre y cuando las variables 
 * estén declaradas e inicializadas antes de mandar a llamar a la funcion, en este primer caso pasa como en el aterior, donde primero
 * mando a llamar una funcion y depues la declaro pero al no estar declarada la variable (Erick) nuevamente solo me reserva el espacio
 * en memoria. Por buenas practicas TODAS LAS VARIABLES SE DEBEN DECLARAR AL INICIO DEL CÓDIGO para que no pase lo que se explica en 
 * este ejemplo.
 */

 hey();

 function hey() {
     console.log('Hola ' + miNombre);
 };
 
 var miNombre = 'Diego';

