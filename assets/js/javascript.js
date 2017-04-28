var lista = 
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]

//Recorrer y mostrar el "title" del arreglo de objetos (en formato de lista), lo cual corresponde a nuestra tarea:
lista.forEach(function(e){
	contenedor.innerHTML += "<li>" + e.title + "<br>" + "</li>" + "<br>";
})

//Función que agrega las tareas a la lista ya creada a través de un botón "Añadir":
function agregarTarea(){
	var valorTarea = document.getElementById("tarea").value;
	var addTarea = document.getElementsByClassName("añadir-tarea");
	addTarea[0].innerHTML += "<li>" + valorTarea + "</li>" + "<br>";

//Constructor que añade la tarea ingresada por el usuario a el arreglo de objetos con sus respectivos atributos:
function Lista(valorTarea){
	this.userId = 1;
	this.id = lista.length + 1;
	this.title = valorTarea;
	this.completed = false;
	}

	var list = new Lista(valorTarea);
	return lista.push(list);
}

