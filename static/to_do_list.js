    const AddTaskBtn = document.getElementById("add-task");
    const ClearTasksBtn = document.getElementById("clear-tasks");
    const TaskList = document.getElementById("task-list");
    const Message = document.getElementById("message");
    const TaskInput = document.getElementById("task-input");
    let tasks = [];

    TaskInput.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            AddTaskFunction();
        }
    })
    AddTaskBtn.addEventListener("click", AddTaskFunction);
    ClearTasksBtn.addEventListener("click", clearTasks);

    function completeTask(i){
        const task = document.getElementById(`task_${i}`)
        task.classList.add('disabled')
    }

    function showMessage(text){
        Message.innerHTML = text;
        setTimeout(function(){Message.innerHTML = ""}, 3000);
    }

    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function loadTasks(){
        let saved = localStorage.getItem("tasks");
        if (saved != null){
            tasks = JSON.parse(saved);
        }
    }
    function AddTaskFunction(){
        let taskInput = document.getElementById("task-input");
        let text = taskInput.value;
        if (text === "") {
            showMessage("Must Enter a task!")
            return;
        }
        showMessage("Task saved")
        tasks.push(text)
        taskInput.value = "";
        saveTasks();
        DisplayTasks();
    }
    function removeTask(i){
        console.log('removed');
        tasks.splice(i, 1);
        showMessage("Task removed!")
        saveTasks();
        DisplayTasks();
    }

    function DisplayTasks(){
        let html = "";
        for (let i = 0; i < tasks.length; i++){
            html += `<div id="task_${i}" style="display:flex;" class="list-group-item">
                    <input type="checkbox" class="form-check" onclick="completeTask(${i})">
                    <p>${tasks[i]}</p>
                    <a type="button" class="btn btn-link" onclick="removeTask(${i})">x</a>
                    </div>`;
        }
        TaskList.innerHTML = html;
    }
    function clearTasks() {
        tasks = [];
        saveTasks();
        DisplayTasks();
    }
loadTasks();
DisplayTasks();