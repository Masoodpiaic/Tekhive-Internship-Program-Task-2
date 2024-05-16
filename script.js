function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');

        const taskText = document.createElement('input');
        taskText.type = 'text';
        taskText.value = taskInput.value;
        taskText.setAttribute('readonly', 'readonly');

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.classList.add('editBtn');
        editBtn.onclick = () => editTask(taskText, editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.onclick = () => deleteTask(li);

        li.appendChild(taskText);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

function editTask(taskText, editBtn) {
    if (editBtn.innerHTML.includes('fa-edit')) {
        taskText.removeAttribute('readonly');
        taskText.focus();
        editBtn.innerHTML = '<i class="fas fa-save"></i>';
    } else {
        taskText.setAttribute('readonly', 'readonly');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function resetTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}
