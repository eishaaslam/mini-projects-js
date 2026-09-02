const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
 
    const taskItem = document.createElement('li');
   
    taskItem.className = 'task-item'; 
    taskItem.textContent = taskText;

  
    taskItem.onclick = function() {
        taskItem.remove();
    };

    
    todoList.appendChild(taskItem);
    
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);