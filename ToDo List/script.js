const taskInput = document.querySelector(".task-input input"),
taskBox=document.querySelector(".task-box");
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
  let li = "";
  if(todos){
    todos.forEach((todo, id) => {
        li += `<li class="task">
           <label for="${id}">
               <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
               <p class="${completed}">${todo.name}</p>
           </label>
           <div class="settings">
               <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
               <ul class="task-menu">
                   <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                   <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
               </ul>
           </div>
       </li>`;
      });
  }
}
taskBox.innerHTML=li;

showTodo();
function updateStatus(selectedTask){
    let taskName=selectedTask.parentElement.lastChildElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked")
        todos[selectedTask.id].status="completed"
    }
    else{
        taskName.classList.remove("checked")
        todos[selectedTask.id].status="pending"
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}


taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.ariaValueMax.trim();
  if (e.key == "Enter" && userTask) {
    if (!todos) {
      todos = [];
    }
    let taskInfo = { name: userTask, status: "pending" };
    todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
  }
});
