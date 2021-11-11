/**Es otro loop o ciclo el cual se asemeja al for, ya que funcionan casi de la misma manera. A diferencia del ciclo foor
 * para que se ejecute el while se debe de cumplir la condición o las condiciones que se agreguen para que se pueda seguir
 * ejecutando, para ello está el siguiente ejemplo
 */

//Para éste ejemplo también se trabajará con el arreglo estudiantes


var estudiantes=["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudante){

    console.log(`Hola,${estudiante}`);

}

while (estudiantes.length>0) {

    console.log(estudiantes) //Imprimeindo el array para observar como se va vaciando

    var estudiante=estudiantes.shift();
    
    saludarEstudiantes(estudiante);
}

                                            //¿Cómo funciona el código?/

/**Por la parte del while se ejecutará el ciclo siempre y cuando el tamaño del array estudiantes sea siempre mayor a cero 
 * 
 * Utilizamos el estudiantes.shift ya que .shift es un modificador del array en el cual se pueden ir eliminando elementos
 * del mismo. En ésta caso funciona para que cada que se vaya cumpliendo una vuelta del ciclo vaya sacando uno por uno los 
 * elementos (nombres del array) para verlo de forma más clara se puede observar gregando un cosole.log antes de la variable
 * para ver como se va ejecutando y sacando elemento por elemnto hasta que el array esté vacío, sea menor a cero y entonces el 
 * ciclo se dejará de ejecutar.
*/