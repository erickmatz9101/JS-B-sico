/**Son reglas de validacion que se deben aplicar para validar si algo es verdadero o falso ygenerar acciones con eso */

//Su síntaxis se escribe de la siguiente manera:

if (condition) { //para que se realice lo que está dentro de los paréntesis la unción debe ser verdadera
    
}


//Ejemplos:


if (true) { //como la condicion si se cumple en consola imprimirá un hola

    console.log("Hola");
    
}

                                                    //ELSE//

/**Se ocupa en caso de la primera condicón no se cumpla para que realice algo más */

if (false) {

    console.log("Hola");          /*Como la condicion inicial no se cumple (que sea verdadera) entra al else  y hace su funcion*/


    
} else {

    console,log("Soy un falso")
    
}




                                                        /**Else If */

//Se utiliza cuando tengo que validar mas cosas, como por ejemplo:

/**Validar si el usiario es mayor de edad ya puede votar, sino lo es no puede votar, pero si tiene mas de 18 años ya a votado mas de 
 * una vez..
 */


var edad=18; //La edad la puedes ir cambiando para validar los posibles escenarios


if (edad===3) {
    
    console.log("Puedes votar, será tú 1ra votación");
    
}else if(edad>18){

    console.log("Puedes votar de nuevo");

}else{

    console.log("Aún no puedes votar");
}


//Nota: Puedes anidar mas de un else if si la lógica del programa te lo permite


                                                    /**Operador Ternario */


//Genera el else if en una sola linea y su sintaxis es de la siguiente manera


condition ? true : false; //El true es el if y el false el else


//Ejemplo: Validar que el numero sea igual al que yo tenga en la variable


var numero=1;

var resultado=numero===1 ? "Si soy un uno" : "No soy un uno";

