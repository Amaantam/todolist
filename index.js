document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText.length <= 0) {
            alert("You must write something in your todo");
        } else {
            const li = document.createElement('li');
            const taskTextContainer = document.createElement('span');
            taskTextContainer.textContent = taskText;
            taskTextContainer.className = 'inputText';

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'task-buttons';

            const editButton = document.createElement('button');
            editButton.className = 'edbutton';
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                const newTaskText = prompt("Edit your Todo", taskTextContainer.textContent);
                if (newTaskText !== null && newTaskText !== "") {
                    taskTextContainer.textContent = newTaskText;
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'debutton';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            const doneButton = document.createElement('button');
            doneButton.className = 'donebutton';
            doneButton.textContent = 'Done';
            doneButton.addEventListener('click', () => {
                li.classList.add('done'); 
                taskList.removeChild(li); 
                taskList.appendChild(li);
            });

            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);
            buttonContainer.appendChild(doneButton);

            li.appendChild(taskTextContainer);
            li.appendChild(buttonContainer);
            taskList.appendChild(li);

            taskList.insertBefore(li, taskList.firstChild);
            taskInput.value = '';
        }
    });
});
