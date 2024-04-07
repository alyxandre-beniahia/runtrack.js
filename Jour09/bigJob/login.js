const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");
document
  .getElementById("logInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let email, password;
    email = emailInput.value;
    password = passwordInput.value;

    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      user_record.some((v) => {
        return v.email == email && v.password == password;
      })
    ) {
      alert("You're logged in");
      let current_user = user_record.filter((v) => {
        return v.email == email && v.password == password;
      })[0];
      localStorage.setItem("name", current_user.name);
      localStorage.setItem("email", current_user.email);
      window.location.href = "index.html";
    } else {
      alert("Log in failed");
    }
  });
