// Add event listener for login button
document.getElementById('btnlogin').addEventListener('click', function() {
    // Get username and password input values
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    // Simple validation for username and password
    if (user == "sovan" && pass == "admin") {
        location.href = "/html/home.html"; // Redirect after successful login
        alert("Login Success!");
    } else {
        alert("Login failed! Please check your username and password.");
    }
});
