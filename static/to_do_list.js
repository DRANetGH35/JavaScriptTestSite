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
        tasks[i]['completed'] = true;
        saveTasks();
        DisplayTasks();
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
        tasks.push({'name': text, 'completed': false})
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
            task_name = tasks[i]['name']
            task_text_element = `<p>${task_name}</p>`
            if (tasks[i]['completed']){task_text_element = `<s>${task_name}</s>`}
            html += `<div id="task_${i}" style="display:flex;" class="list-group-item">
                    <input type="checkbox" class="form-check" onclick="completeTask(${i})">
                    ${task_text_element}
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