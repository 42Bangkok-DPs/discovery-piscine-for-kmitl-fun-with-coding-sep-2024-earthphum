document.addEventListener('DOMContentLoaded', (event) => {
    const taskListDiv = document.getElementById('ft_list');
    const newTaskButton = document.getElementById('new_task');
    
    // Load tasks from cookies if available
    loadTasksFromCookies();

    newTaskButton.addEventListener('click', () => {
        const taskText = prompt("Please enter a new task:");
        if (taskText) {
            addTask(taskText);
            saveTasksToCookies();
        }
    });

    function addTask(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.textContent = taskText;
        taskDiv.addEventListener('click', () => {
            const confirmation = confirm("Do you really want to delete this task?");
            if (confirmation) {
                taskDiv.remove();
                saveTasksToCookies();
            }
        });
        taskListDiv.insertBefore(taskDiv, taskListDiv.firstChild);
    }

    function saveTasksToCookies() {
        const tasks = [];
        document.querySelectorAll('#ft_list .task').forEach(task => {
            tasks.push(task.textContent);
        });
        document.cookie = `tasks=${JSON.stringify(tasks)};path=/;`;
    }

    function loadTasksFromCookies() {
        const cookies = document.cookie.split('; ');
        const taskCookie = cookies.find(cookie => cookie.startsWith('tasks='));
        if (taskCookie) {
            const taskArray = JSON.parse(taskCookie.split('=')[1]);
            taskArray.forEach(task => addTask(task));
        }
    }
});
