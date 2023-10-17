const paper_sign = document.querySelector(".paper_container");
const login_swap = document.querySelector(".login_link");
const register_swap = document.querySelector(".register_link");
const open_paper = document.querySelector("#sign_up_paper");
const exit_paper = document.querySelector(".exit_paper");
const background = document.querySelector("body");
const frankie = document.querySelector(".outside_frankie_container");
const logo = document.querySelector("#outside_logo");
const speaking = document.querySelector(".outside_speaking_container");

register_swap.addEventListener("click", function () {
  paper_sign.classList.add("on_register");
});

login_swap.addEventListener("click", function () {
  paper_sign.classList.remove("on_register");
});

open_paper.addEventListener("click", function () {
  paper_sign.classList.add("paper_open");
  background.classList.add("paper_open");
  frankie.classList.add("paper_open");
  speaking.classList.add("paper_open");
  logo.classList.add("paper_open");
  open_paper.classList.add("paper_open");
});

exit_paper.addEventListener("click", function () {
  paper_sign.classList.remove("paper_open");
  background.classList.remove("paper_open");
  open_paper.classList.remove("paper_open");
  frankie.classList.remove("paper_open");
  speaking.classList.remove("paper_open");
  logo.classList.remove("paper_open");
});
