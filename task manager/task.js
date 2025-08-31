 // Get DOM elements
        const taskInput = document.getElementById('taskInput');
        const addButton = document.getElementById('addButton');
        const taskList = document.getElementById('taskList');

        // Add event listener to the button
        addButton.addEventListener('click', addItem);

        // Add event listener for Enter key in the input field
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addItem();
            }
        });

        // Function to add a new item
        function addItem() {
            // Get the text from the input box
            const taskText = taskInput.value.trim();
            
            // Check if input is not empty
            if (taskText === '') {
                alert("Please enter some text");
                return;
            }
            
            // Create a new list item
            const li = document.createElement('li');
            
            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = function() {
                taskList.removeChild(li);
            };
            
            // Append elements to the list item
            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
            
            // Add the list item to the unordered list
            taskList.appendChild(li);
            
            // Clear the input box
            taskInput.value = '';
            
            // Focus back on the input for convenience
            taskInput.focus();
        }