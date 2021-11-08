/** Una de las funcionalidade de la coercion en el diseño web es cuando los usuarios ingresan un dato, la maquina lo detecta como
 * tipo String pero en realidad a veces nos conviene cambiar ese tipo de dato segun la operacion o lo que vaya a realizar el 
 * codigo, este es un ejemplo claro de que aqui podemos usar la coercion para manipular las variables segun el tipo de dato que 
 * se requiera*/




/**La coercion es la forma en la que podemos cambiar un tipo de valor a otro y existen 2 tipos:
 * 
 * Implicita: El lenguaje cambia de un tipo de valor a otro tipo de valor
 * 
 * Explicita: Obligamos a que un valor de un tipo cambie a un valor de otro tipo
 * 
 */

/**Coercion Implicita: en este primer ejemplo el operador suma funciona como la concatenacion de ambos valores por eso al mostrar el tipo
 * de valor lo muestra como String porque concatena ambos valores, NO LOS SUMA, LOS JUNTA  y da como resultado un 47
 */



var a=4+"7";

typeof a; //El valor de a en consola muestra un String


/**En este segundo ejemplo al ser un operador de numero  JS identifica que no quiero ocupar el 7 como valor de tipo String  sino de 
 * tipo numero por ello los multiplica y me regersa un avalor de tipo number. El operador de tipo suma no suma los valores los JUNTA
 * por lo cual da como resultado un 47 de tipo String
 */


var b=4*"7";

typeof b; //muestra en consola un valor de tipo number

/**En este segundo ejemplo al identificar el operador multiplicacion, identifica que quiero hacer la operacion por lo tanto toma
 * el 7 que es de tipo String como tipo Number y los multiplica y da como resultado 28 en consola.
  */

var b=4*"7";

typeof b; //Muestra un valor de tipo number en consola



                                         /**Ejemplos de Coercion Explicita */

var a =20; // es de tipo number

var b= a + "";

console.log(b);

typeof b; //Nos da como resultado un valor de tipo String 


/**En este caso vamos a "obligar" que el valor de a sea de tipo string de igual manera; para ello ocupamos el Metodo String y paso como
 * parametro la variable a la que quiero hacer coecion (a), y para pasar de String a Number es el mismo procedimiento solo que ahora
 * ocupo el metodo Number y paso como parametro la variable a convertir (c).
*/

var c= String(a);

console.log(c);

typeof c; //L variable c en consola muestra un valor String 


// De string a numero //

var d=number(c);

typeof d; //La variable ahora sera un valor de tipo number







