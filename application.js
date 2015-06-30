var toDoList = [];

function changeDisplay(){
	var list = document.getElementById("todolist");
	list.innerHTML = "";
	//This is the only place we actually change the screen.
	for(var i=0; i<toDoList.length; i++){
		list.innerHTML += '<div class="item">' + toDoList[i] + '(<a href="#" onclick="javascript:removeToDo(' + i + ')">X</a>)' +
		'</div>';
	}
}

function removeToDo(itemToRemove){
	var newList = [];
	for(var i=0;i<toDoList.length;i++){
		if( i !== itemToRemove) {
			newList.push(toDoList[i]);
		}
	}
	toDoList = newList;
	changeDisplay();
}

function addToDo() {
	
	var tmpItem;
	var newToDo = document.getElementById("todonew");
	
	tmpItem = newToDo.value;
	
	toDoList.push(tmpItem);
	
	changeDisplay();
	
	
	newToDo.value = "";
	newToDo.select();
	
}