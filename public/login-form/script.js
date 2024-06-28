const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const btnClose = document.querySelector(".icon-close");

console.log(loginLink);
console.log(registerLink);

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.which === 27) {
    wrapper.classList.remove("active-popup");
  }
});
