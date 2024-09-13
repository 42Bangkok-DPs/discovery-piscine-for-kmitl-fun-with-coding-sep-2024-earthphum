$(document).ready(function() {
    const $taskListDiv = $('#ft_list');
    const $newTaskButton = $('#new_task');
    
    // โหลด tasks จากคุกกี้ถ้ามี
    loadTasksFromCookies();

    $newTaskButton.on('click', function() {
        const taskText = prompt("Please enter a new task:");
        if (taskText) {
            addTask(taskText);
            saveTasksToCookies();
        }
    });

    function addTask(taskText) {
        const $taskDiv = $('<div>').addClass('task').text(taskText);
        $taskDiv.on('click', function() {
            const confirmation = confirm("Do you really want to delete this task?");
            if (confirmation) {
                $(this).remove();
                saveTasksToCookies();
            }
        });
        $taskListDiv.prepend($taskDiv);
    }

    function saveTasksToCookies() {
        const tasks = [];
        $('#ft_list .task').each(function() {
            tasks.push($(this).text());
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
