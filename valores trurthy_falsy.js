/** Este tipo  de valores son comunmente utilizados en JS cuaando queremos realizar alguna validacion y poder realizar o no alguna accion */

/**Recuerda hacer uso de estos valores en el navegador y para ello hacer uso de la funcioon boolean (); */

//Todos estos valores regersan un falso (falsy) No realizan un evento si la funcion y su parámetro tienen los sig valores:


Boolean(); //false

Boolean(0); //false

Boolean(null); //false

Boolean(Nan); //false

Boolean(undefined); //false

Boolean(false); //false

Boolean(""); //false (el string no debe tener espacio en las comillas)


//Todos estos valores regresan un verdadero (trurthy) Si realizan la acción si la funcion y el prámetro tienen los sig valores:

Boolean(1); //Cualquier numero que sea diferente de cero

Boolean(a); //para cualquier caracter o espacio en blanco en el String

Boolean([]); // Para cualquier array aunque esté vacío

Boolean({}); //Para cualquier objeto aunque esté vacío

Boolean(function(){}); //Cualquier función es verdadera
