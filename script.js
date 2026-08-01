document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const taskList = document.getElementById('taskList');

    // Step 2: Form Validation Logic Check (Required fields & Email format regex match)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nameInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        alert("Please enter a valid client name and email address!");
        return;
    }

    // Step 4: Dynamic DOM Manipulation (Creating & Adding a Task Element)
    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>${nameInput.value}</strong> (${emailInput.value})</span>
        <button class="del-btn">Remove</button>
    `;

    taskList.appendChild(li);
    updateCount();

    // Clear the form input layers
    nameInput.value = "";
    emailInput.value = "";

    // Step 4: Dynamic DOM Manipulation (Removing a Task Element)
    li.querySelector('.del-btn').addEventListener('click', function() {
        li.remove();
        updateCount();
    });
});

// Simple reduction counter tool function
function updateCount() {
    const total = document.getElementById('taskList').children.length;
    document.getElementById('taskCount').textContent = total;
}
