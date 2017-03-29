//alert("Hola Trello"); Prueba de enlaze html con js
//Constructor del objeto lista
function Lista(nombre,tarea){
  this.nombre=nombreLista;
  this.tarea=tareadeLista;
}

function crearLista(){
  //Creando la lista:
    var lista =document.createElement('ul'); //Se crea un elemento lista desordenada
    var tituloLista = document.getElementById('nombreLista').value; //Se accede al dato ingresado por el usuario que será el título de la lista
    var name = document.createTextNode(tituloLista);//Se crea el nodo de texto (título de la lista)
    lista.appendChild(name);//Se crea como hijo de la lista el título de la misma
    document.body.appendChild(lista);//Se muestra en el body la lista
}
function crearBotonTarea(){
  //Creando un nuevo botón:
    var btn = document.createElement("button"); // Se crea un nuevo elemento de tipo botón
    var texto = document.createTextNode("Agregar tarea"); // Se asigna el texto que muestra el botón
    btn.appendChild(texto); // Se agrega como hijo ese texto al botón
    document.body.appendChild(btn); //Se muestra en el body el botón
}
  


function crearTarea(){
  //Este me sirve para crear tarea
  //document.getElementById('lista').appendChild(li);
}
