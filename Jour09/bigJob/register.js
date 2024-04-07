const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const plateformeDomain = "@laplateforme.io";
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
const digitsOnlyRegex = /^\d+$/;
const inputs = document.querySelectorAll("input");
const users = new Array();
const submitButton = document.getElementById("submitBtn");
submitButton.disabled = true;
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");
const passwordInputConf = document.getElementById("password_input_conf");
const adressInput = document.getElementById("adress_input");
const postalInput = document.getElementById("postal_code_input");
function checkConditions() {
  const emailValid =
    emailInput.value.trim() !== "" &&
    emailInput.value.match(emailRegex) &&
    emailInput.value.split("@")[1] === "laplateforme.io";
  const passwordValid =
    passwordInput.value.trim() !== "" && passwordInput.value.length >= 6;
  const addressValid =
    adressInput.value.trim() !== "" && addressRegex.test(adressInput.value);
  const postalCodeValid =
    postalInput.value.trim() !== "" && digitsOnlyRegex.test(postalInput.value);

  return emailValid && passwordValid && addressValid && postalCodeValid;
}
inputs.forEach((input) => {
  switch (input.id) {
    case "email_input":
      emailInput.addEventListener("blur", () => {
        if (!emailInput.value.match(emailRegex)) {
          if (!document.getElementById("email_msg")) {
            errorMessage = "Please enter a valid email address. ";
            const errorP = document.createElement("p");
            errorP.setAttribute("id", "email_msg");
            const textNode = document.createTextNode(errorMessage);
            errorP.appendChild(textNode);
            document.getElementById("email_div").appendChild(errorP);
          }
        } else {
          const emailDomain = emailInput.value.split("@")[1];
          if (emailDomain !== "laplateforme.io") {
            if (!document.getElementById("email_msg")) {
              errorMessage = "Please use the @laplateforme.io domain. ";
              const errorP = document.createElement("p");
              errorP.setAttribute("id", "email_msg");
              const textNode = document.createTextNode(errorMessage);
              errorP.appendChild(textNode);
              document.getElementById("email_div").appendChild(errorP);
            } else {
              document.getElementById("email_msg").textContent =
                "Please use the @laplateforme.io domain. ";
            }
          } else {
            const emailErrMsg = document.getElementById("email_msg");
            if (emailErrMsg) {
              emailErrMsg.remove();
            }
          }
        }
        const allConditionsMet = checkConditions();
        submitButton.disabled = !allConditionsMet;
      });
      break;
    case "password_input":
      passwordInput.addEventListener("blur", () => {
        if (passwordInput.value.length < 6) {
          if (!document.getElementById("pw_msg")) {
            errorMessage = "Please enter a longer password 6 char minimum";
            const errorP = document.createElement("p");
            errorP.setAttribute("id", "pw_msg");
            const textNode = document.createTextNode(errorMessage);
            errorP.appendChild(textNode);
            document.getElementById("pw_div").appendChild(errorP);
          }
        } else {
          const pwErrMsg = document.getElementById("pw_msg");
          if (pwErrMsg) {
            pwErrMsg.remove();
          }
        }
        const allConditionsMet = checkConditions();
        submitButton.disabled = !allConditionsMet;
      });
      break;
    case "password_input_conf":
      passwordInputConf.addEventListener("blur", () => {
        if (passwordInput.value !== passwordInputConf.value) {
          if (!document.getElementById("pw_conf_msg")) {
            errorMessage = "Passwords do not match";
            const errorP = document.createElement("p");
            errorP.setAttribute("id", "pw_conf_msg");
            const textNode = document.createTextNode(errorMessage);
            errorP.appendChild(textNode);
            document.getElementById("pw_div").appendChild(errorP);
          }
        } else {
          const pwConfErrMsg = document.getElementById("pw_conf_msg");
          if (pwConfErrMsg) {
            pwConfErrMsg.remove();
          }
        }
        checkConditions(); // Check all conditions including password match
      });
      break;
    case "adress_input":
      adressInput.addEventListener("blur", () => {
        if (!addressRegex.test(adressInput.value)) {
          if (!document.getElementById("adress_msg")) {
            errorMessage = "enter a valid adress";
            const errorP = document.createElement("p");
            errorP.setAttribute("id", "adress_msg");
            const textNode = document.createTextNode(errorMessage);
            errorP.appendChild(textNode);
            document.getElementById("adress_div").appendChild(errorP);
          }
        } else {
          const addressErrMsg = document.getElementById("adress_msg");
          if (addressErrMsg) {
            addressErrMsg.remove();
          }
        }
        const allConditionsMet = checkConditions();
        submitButton.disabled = !allConditionsMet;
      });
      break;
    case "postal_code_input":
      postalInput.addEventListener("blur", () => {
        if (!digitsOnlyRegex.test(postalInput.value)) {
          if (!document.getElementById("postal_msg")) {
            errorMessage = "Postal code must contain digits only";
            const errorP = document.createElement("p");
            errorP.setAttribute("id", "postal_msg");
            const textNode = document.createTextNode(errorMessage);
            errorP.appendChild(textNode);
            document.getElementById("postal_code_div").appendChild(errorP);
          }
        } else {
          const postalErrMsg = document.getElementById("postal_msg");
          if (postalErrMsg) {
            postalErrMsg.remove();
          }
        }
        const allConditionsMet = checkConditions();
        submitButton.disabled = !allConditionsMet;
      });
  }
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name_input").value;
    var fname = document.getElementById("fname_input").value;
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    var address = document.getElementById("adress_input").value;
    var postalCode = document.getElementById("postal_code_input").value;

    var formData = {
      name: name,
      fname: fname,
      email: email,
      password: password,
      address: address,
      postalCode: postalCode,
    };

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      user_records.some((v) => {
        return v.email == email;
      })
    ) {
      alert("email already used");
    } else {
      user_records.push(formData);
      localStorage.setItem("users", JSON.stringify(user_records));
    }
  });
// need to add the moderators and admin param to the user
