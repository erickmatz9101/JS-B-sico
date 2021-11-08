/**Los ciclos o loops coo tambien se le conoce son utilizados cuando tengo que repetir una tarea multiples veces  */


/**Ejemplo:
 * 
 * Cada que yo agregue un estudiante al array debo de saludar a ese estudiante
 */

var estuduantes=["Maria", "Sergio", "Rosa", "Daniel"];

//En mi funcion esta la tarea que debo de realizar si se integra un nuevo alumno a mi array

function saludarEstudiantes(estudiante) {
    
    console.log(`Hola $ {estudiante}`);
}

for(var i=0; i<estuduantes.length; i++){

    saludarEstudiantes(estuduantes[i])
}


                                                //¿Cómo funciona este ciclo for? //

/**Para este caso mientras la variable i sea menor a la longitud completa de array estudiantes, entonces realizara la tarea de la funcion
 *  .lenngth nos ayuda a ir contabilizando elemento por elemento del array
 * 
 * console.log: manda a llamar al array [i] donde i es el index o índice es decir la posicion de cada elemento del array
 * 
 * Por ejemplo si en el primer caso i=0 entonces toma el valor de la psosicion cero que es este caso es Maria
 */



                                                    ///For Of///

//Su sintaxis es de la siguiente manera:

/**
 * 
 * 
 * 
 *               for (variable en singular of nombreArray) {
    
                }
 * 
 * 
 * 
 */



for (estudiante of estudiantes) {

    saludarEstudiantes(estudiante);
    

}

                                            //¿Cómo funciona el For Of?//

/**En el array hablamos en PLural es decir mas de un elemento, en este caso se llama estudiantes  como se ve dentro del for of
 * y la palabra estudiante esta en singular (es decir solo un elemento de array), para este caso la palabra estudiante funciona
 * como el index, que va contando los elementos de array estudiantes; esto quiere decir que en el momento que deje contabilizar
 * estudiante por estudiante la funcion deja d ehacer su tarea.
*/

