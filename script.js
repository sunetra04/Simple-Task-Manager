function addTask() {
    const taskInput = document.getElementById('task-input');
    const durationInput = document.getElementById('task-duration');
    const dateInput = document.getElementById('task-date');

    const taskText = taskInput.value.trim();
    const duration = durationInput.value.trim();
    const date = dateInput.value;

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-meta">
        ⏱ Duration: ${duration || 'Not set'} | 📅 Due: ${date || 'Not set'}
      </div>
      <div class="actions">
        <button class="done-btn" onclick="markAsDone(this)">Done</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;

    taskList.appendChild(li);

    taskInput.value = '';
    durationInput.value = '';
    dateInput.value = '';
}

function deleteTask(button) {
    button.closest('li').remove();
}

function markAsDone(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');

    if (li.classList.contains('completed')) {
        button.textContent = '✅ Done';
        button.disabled = true;
    }
}
