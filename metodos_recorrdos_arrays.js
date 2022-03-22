/**Para esta clase se va a crear un array el cual contenga dentro onjetos con productos y sus costos y poder acceder a ellos por medio de
 * algunos métodos.
 */



var articulos= [

    {nombre:"Bici", costo:3000}, 
    {nombre:"Tv", costo:2500}, 
    {nombre:"Libro", costo:320}, 
    {nombre:"Celular", costo:10000},
    {nombre:"Laptop", costo:20000},
    {nombre:"Teclado", costo:500},
    {nombre:"Audifonos", costo:1700},    

];

/**Métodos de recorridos de arrays */

/**Filter: valida si algo es verdad o falso y lo mete en un nuevo array, no modifica al array que ya tenemos,
 * En primer lugar tenemos que declarar un nuevo array que es donde vamos a meter lo que deseamos filtrar, del
 * lado derecho de la igualdad llamamos al array (articulos) que es de donde deseamos filtrar y hacemos uso del 
 * método .filter al cual le debemos pasar como  parámetro en este caso (articulo) que es el que queremos ir 
 * filtrando. Dentro retornamos (return) el articulo o el nombre del articulo cuyo valor sea menos o igual a
 * $500
 */

var articulosFiltrados = articulos.filter(function(articulo){

    return articulo.costo <=500;


});



/**Metodo de Map: Ayuda a mapear cierto numero de articulos el cual genera de igual maera un nuevo array, no modifica el que tenemos,
 * por lo cual debo generar uno nuevo donde se guardaran los resultados. Detro de el tambie lleva una funcion, comop prametro lleva
 * los articulos que deseamos mapear, y regresara el nombre de los articulos. Es decir me regesa el nombre de cada uno de los articulos
 * de mi array. Mapea todo el contenido del array y nos regersa lo que estamos buscando, en mis ejemolos muestra los nombres de todos
 * los articulos(ejemplo 1) y los costos de cada uno de los articulos(ejemplo2).
 */

var nombreArticulos=articulos.map(function(articulo){

    return articulo.nombre; 

});


/**Mapeando los costos de los articulos de mi array */

var costoArticulos=articulos.map(function(articulo) {

    return articulo.costo;
    
});



/**Método .find(): El cual nos ayudará a encoentrar algo dentro de nuestro array, para ello se gebera y¿u nuevo array con el valor que 
 * yo le este pasando, a diferencia de los demas genera un true o un false si el articulo existe dentro de mis articulos en este caso.
 * Deberá llevar como parámetro el articulo que estemos buscando. Uso el triple igual para validar que sea completamnte igual lo que 
 * estoy buscando en este caso nos referimos al articulo laptop.
  */


var encuentraArticulo =articulos.find(function(articulo){

    return articulo.nombre === "Laptop";

});




/**Método ForEach: No genera un nuevo array solo genera el filtrado sobre el array principal por lo cual debo de mandar a llamar el array
 * que ya tengo para poder manipularlo, dentro del foreach como parametro se genera la funcion. Como parametro se le pasa el articulo
 * que queremos que nos rgerse e imprima el nombre de los articulos que tiene ese array.
 */


articulos.forEach(function(articulo){

    console.log(articulo.nombre);

});


/**Si quisiera que me regrese el costo de mis articulos */


articulos.forEach(function(articulo){

    console.log(articulo.costo);

});


/**Método Some: Regtresa un true o false para articulos que cumplan esa validacion, se genera un nuevo array. Regresara los articulos
 * que tengan un costo menor o igual a $700. El some solo hace un validacion de si la condicion es verdadero o falso es decir si si hay
 * articulos qyue sean menores o iguales a 700. es decir solo me dice si se cumple o no la condicion, si no se tucvieran articulos 
 * menores o iguales a ese precio regresaria false
 */


var articulosBaratos = articulos.some(function(articulo){

    return articulo.costo <=700;



});