"use strict";

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.getElementById("form");
const email = document.getElementById("email");
// const formContainer = document.querySelector(".form-container");
// const small = document.querySelector(".small");

// show input error message
function showError(input, message) {
  const formContainer = input.parentElement;
  formContainer.className = "form-container error";
  const small = formContainer.querySelector("small");
  small.innerText = message;
}

// show input success message

function showSuccess(input) {
  const formContainer = input.parentElement;
  formContainer.className = "form-container success";
}

// event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please provide a valid email");
  } else {
    showSuccess(email);
  }
});
