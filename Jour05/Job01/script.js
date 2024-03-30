const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
const digitsOnlyRegex = /^\d+$/;

console.log(document.getElementById("email_msg"));
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
  switch (input.id) {
    case "email_input":
      const emailInput = document.getElementById("email_input");
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
          const emailErrMsg = document.getElementById("email_msg");
          if (emailErrMsg) {
            emailErrMsg.remove();
          }
        }
      });
      break;
    case "password_input":
      const passwordInput = document.getElementById("password_input");
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
      });
      break;
    case "adress_input":
      const adressInput = document.getElementById("adress_input");
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
      });
      break;
    case "postal_code_input":
      const postalInput = document.getElementById("postal_code_input");
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
      });
  }
});
