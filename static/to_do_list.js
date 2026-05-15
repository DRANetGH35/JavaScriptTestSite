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

    function filterChanged(){
        DisplayTasks();
    }

    function completeTask(i){
        if (tasks[i]['Status'] == "Active") {
            tasks[i]['Status'] = "Completed"
        }
        else {
            tasks[i]['Status'] = "Active"
        }
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
        tasks.push({'name': text, 'Status': 'Active'})
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
    function editTask(i){
        let taskInput = document.getElementById("task-input");
        tasks[i]['name'] = taskInput.value;
        saveTasks();
        DisplayTasks();
    }
    function DisplayTasks(){
        let html = "";
        filter_status = document.querySelector('input[name="filter"]:checked').id
        console.log(filter_status)
        for (let i = 0; i < tasks.length; i++){
            //check if the task matches the filter
            if (filter_status == "All" || filter_status == tasks[i]['Status']){
                //display the task
                task_name = tasks[i]['name']
                checkbox = `<input type="checkbox" class="form-check" onclick="completeTask(${i})">`
                task_text_element = `<p>${task_name}</p>`
                if (tasks[i]['Status'] == 'Completed'){
                task_text_element = `<s>${task_name}</s>`
                checkbox = `<input type="checkbox" class="form-check" onclick="completeTask(${i})" checked>`
            }
                html += `<div id="task_${i}" style="display:flex;" class="list-group-item">
                    ${checkbox}
                    ${task_text_element}
                    <a type="button" class="btn btn-link" onclick="editTask(${i})" style="margin-left:5px">Edit</a>
                    <a type="button" class="btn btn-link" onclick="removeTask(${i})">x</a>
                    </div>`;
            }
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