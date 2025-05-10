document.getElementById("interactiveBtn").addEventListener("click", function() {
    this.textContent = "Done!";
    this.style.backgroundColor = "purple";
});

document.getElementById("interactiveBtn").addEventListener("dblclick", function() {
    alert("Secret double-click action activated!");
});

document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email!");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters!");
    } else {
        alert("Form submitted successfully!");
    }
});

