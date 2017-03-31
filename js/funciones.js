//alert("Hola Trello"); Prueba de enlace html con js
//Constructor del objeto lista
function Lista(){

  this.division = document.createElement("hr");

  this.crearLista = function (){
    //Método creando la lista:
      var listaCr = document.createElement('ul'); //Se crea un elemento lista desordenada
      var tituloLista = document.getElementById('nombreLista').value; //Se accede al dato ingresado por el usuario que será el título de la lista
      var name = document.createTextNode(tituloLista);//Se crea el nodo de texto (título de la lista)
      lista.appendChild(name);//Se crea como hijo de la lista el título de la misma
      document.body.appendChild(listaCr);//Se muestra en el body la lista
    }

    this.crearBotonTarea = function(){
      //Método creando un nuevo botón:
      var btn = document.createElement("button"); // Se crea un nuevo elemento de tipo botón
      btn.setAttribute("type", "button");
      btn.setAttribute("onclick", "crearTarea();");
      var texto = document.createTextNode("Agregar tarea"); // Se asigna el texto que muestra el botón
      btn.appendChild(texto); // Se agrega como hijo ese texto al botón
      document.body.appendChild(btn); //Se muestra en el body el botón
      var idBoton = document.createAttribute("id");//Se crea el atributo id al botón Agregar tarea, para poder darle funcionalidad
      idBoton.value = "idBoton"; //Se guarda el id en el elemento
      //console.log(idBoton);  --Prueba de funcionalidad
      //  crearTarea();
    }
}

var listas = []; //Arreglo vacío para almacenar las listas
  function nuevaLista(){
    var lista = new Lista()
    listas.push(lista);
}

function crearTarea(){
  var idList = document.createAttribute("id");
  idList.value = "idDeLista";
//  console.log(idList);
//Creando el nuevo input para guardar elementos en la lista
var inputList = document.createElement("input");
var textoInput = document.createTextNode("");
inputList.appendChild(textoInput);
document.body.appendChild(inputList);
var idInput = document.createAttribute("id");
idInput.value = "idInput";

agregarElementosLista();

}

function agregarElementosLista(){
    var elemento = document.createElement('li');
    var textoLi = document.getElementById('idInput').value;
    var name = document.createTextNode(textoLi);
    elemento.appendChild(name);
    document.body.appendChild(elemento);
  }
