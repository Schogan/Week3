function addToDo() {
	var toDoList = [];
	var list;
	
	list = document.getElementById("todolist");
	
	toDoList[0] = "Take out the dog";
	
	list.innerHTML += '<div class="item">' + toDoList[0] + '</div>'
}