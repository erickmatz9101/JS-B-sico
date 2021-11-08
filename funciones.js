//Exísten 2 tipo de funciones:

/*Funciones declarativas las cuales hacen uso de la palabra reservada FUNCTION su sintaxis se escribe de la siguiente manera:

                            palabra reservada + nombre de la función(){

                            }

*/

function mifuncion(){
    return 3;
}

mifuncion();  //se manda a llamar por el nombre de la funcion que yo le de 

/*Funciones expresivas: Utilizan la palabra reservada VAR éstas funciones crean una variable la cual está guardada dentro de una función
su sintaxis se escribe de la siguiente manera:

                            palabra reservada + nombre de la funcion = function (){

                                }          */

var mifuncion=function(a,b){

    return a+b; 
}           

mifuncion();  // se manda a llamar por el nombre de la variable que yo le de


//Ejemplo de una funcion declarativa. esto se puede y tiene que hacer en la consola de google

//console, log imprime ciertas cosas en la consola en tiempo real

function saludarEstudiantes(estudiante){

    console.log(estudiante);
}

saludarEstudiante("Erick");

/*Cuando tenga que repetir e imprimir muchas veces un mismo proceso en consola puedo generar un plantilla de cadena de texto 
la cual sirve si quisiera conectar a la bdd y tenga que repetir esta funcion muchas veces su sintaxis es de la siguiente manera:

        console.log(`Hola $ {nombreVariable}`);*/
//EJEMPLO


console.log(`Hola${estudiante}`);

saludarEstudiantes("Erick")


//Para obtener el resultado de una función sin utilizar el console.log

//La variable resultado es es la que gusrda y muestra el resultado de sumar los parametros a y b

function suma(a,b){
    
    var resultado= a+b;
    return resultado;


}

suma(1,2);
