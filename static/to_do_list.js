    const AddTaskBtn = document.getElementById("add-task");
    const ClearTasksBtn = document.getElementById("clear-tasks");
    const TaskList = document.getElementById("task-list");
    let tasks = [];

    AddTaskBtn.addEventListener("click", AddTaskFunction);
    ClearTasksBtn.addEventListener("click", clearTasks);

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
            return;
        }
        tasks.push(text)
        taskInput.value = "";
        saveTasks();
        DisplayTasks();
    }
    function removeTask(i){
        console.log('removed');
        tasks.splice(i, 1);
        saveTasks();
        DisplayTasks();
    }

    function DisplayTasks(){
        let html = "";
        for (let i = 0; i < tasks.length; i++){
            html += `<li>
                    ${tasks[i]}
                    <button type="button" class="btn btn-link" onclick="removeTask(${i})">x</button>
                    </li>`;
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