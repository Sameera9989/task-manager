const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
addButton.addEventListener('click', addItem);
taskInput.addEventListener('keypress', function(e) {
     if (e.key === 'Enter') {
         addItem();
     }
});
function addItem() {
         const taskText = taskInput.value.trim();
         if (taskText === '') {
             alert("Please enter some text");
             return;
         }
         const li = document.createElement('li');
         const taskSpan = document.createElement('span');
         taskSpan.textContent = taskText;
         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.className = 'delete-btn';
         deleteBtn.onclick = function() {
               taskList.removeChild(li);
         };
         li.appendChild(taskSpan);
         li.appendChild(deleteBtn);
         taskList.appendChild(li);
         taskInput.value = '';
         taskInput.focus();
        }
