    const AddTaskBtn = document.getElementById("add-task");

    const TaskList = document.getElementById("task-list");
    let tasks = [];

    AddTaskBtn.addEventListener("click", AddTaskFunction);
    
    function AddTaskFunction(){
        let taskInput = document.getElementById("task-input");
        let text = taskInput.value;
        if (text === "") {
            return;
        }
        tasks.push(text)
        taskInput.value = "";
        //saveTasks();
        DisplayTasks()
    }
    function removeTask(i){
        console.log('removed')
        tasks.splice(i, 1)
        DisplayTasks()
    }

    function DisplayTasks(){
        let html = ""
        for (let i = 0; i < tasks.length; i++){
            html += `<li>
                    ${tasks[i]}
                    <button onclick="removeTask(${i})">x</button>
                    </li>`;
        }
        TaskList.innerHTML = html;
    }
