                                                        ///Switch///

/**Es otra manera de poder validar y generar condiciones, funciona por casos, si es verdad entra en esa parte de el coódigo
 * sino lo es puede seguir validando si en alguno de los casos se encuentra...
 */

//Su sintaxis se escribe de la siguiente manera:

switch (number) {  //aqui va la expresion que debe ser comparada con cada caso en est caso es numer por el tipo de variable ver ejemplo

    case value: //cada uno de los casos es la validacion 
        
        break; //donde termina el caso 1 y el break hace la funcion de que salga de el

    default: //es el corte o cierre de la validacion de condiciones con el se termina la validacion de los posibles casos
             //se puede agregar algun mensaje de salida
        break;
}

//Ejemplo:

var numero=1;


switch (numero) {
    case 1:
        console.log("Soy un uno");
        
        break;

        case 10:
            console.log("Soy un 10");

            case 100:
                console.log("Soy un 100");

    default:
        console.log("No soy nada");
        
        break;
}