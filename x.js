const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Legend" && password === "0987123") {
        alert("You have successfully logged");
        window.location.href = "k.html";

    } if (username === "lam" && password === "zero") {
        alert("You have successfully logged");
        window.location.href = "k.html";
    }  else {
        alert("we have some error");
    }
})
