//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');

    // Check for saved credentials
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) {
        existingButton.style.display = 'block';
    }

    // Existing user login
    existingButton.addEventListener('click', function() {
        alert(`Logged in as ${savedUsername}`);
    });

    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    });
});