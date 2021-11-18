/**Su finalidad es definir las porpiedades del objeto (sus atributos y métodos que serán utilizados mas adelante) 
 * 
 * 
 * Su sintáxis es: 
 * 
 * function + nombre (propiedades del objeto){
 * 
 * 
 * }
 * 
*/

//Ejemplo:


function auto(marca, modelo, annio) {

    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
    
}

//Para poder crear nuestro(s) objeto(s)  partir del método contructor su sintáxis es de la siguiente manera:

/**
 * 
 * var nombreIbjeto= new + consructor(atributos del constructor);
 * 
 */


var autoNuevo= new auto("Tesla", "Model 3", 2020);

var autoNuevo2= new auto("Tesla","Model X",2021);


