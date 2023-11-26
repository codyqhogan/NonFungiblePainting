const characters =
  "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const paper_sign = document.querySelector(".paper_container");
const login_swap = document.querySelector(".login_link");
const register_swap = document.querySelector(".register_link");
const open_paper = document.querySelector("#sign_up_paper");
const exit_paper = document.querySelector(".close_paper");
const background = document.querySelector("body");
const frankie = document.querySelector(".outside_frankie_container");
const logo = document.querySelector("#outside_logo");
const speaking = document.querySelector(".outside_speaking_container");
const floor = document.querySelector("#outside_floor");
const regi = document.getElementById("register");
const logi = document.getElementById("login");
const regi_b = document.getElementById("register_button");
const logi_b = document.getElementById("login_button");

register_swap.addEventListener("click", function () {
  paper_sign.classList.add("on_register");
  logi.style.display = "none";
  regi.style.display = "initial";
});

login_swap.addEventListener("click", function () {
  paper_sign.classList.remove("on_register");
  regi.style.display = "none";
  logi.style.display = "initial";
});

open_paper.addEventListener("click", function () {
  paper_sign.classList.add("paper_open");
  background.classList.add("paper_open");
  frankie.classList.add("paper_open");
  speaking.classList.add("paper_open");
  logo.classList.add("paper_open");
  open_paper.classList.add("paper_open");
  floor.classList.add("paper_open");
});

exit_paper.addEventListener("click", function () {
  paper_sign.classList.remove("paper_open");
  background.classList.remove("paper_open");
  open_paper.classList.remove("paper_open");
  frankie.classList.remove("paper_open");
  speaking.classList.remove("paper_open");
  logo.classList.remove("paper_open");
  floor.classList.remove("paper_open");
});

function gen_random_str() {
  var length = Math.floor(Math.random() * 20);
  const options = characters.length;
  var random_str = "";
  for (let i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * options);
    random_str += characters.charAt(character);
  }
  return random_str;
}

regi_b.onclick = function () {
  var name = document.getElementById("name");
  var email_r = document.getElementById("email_r");
  var passwd_r = document.getElementById("passwd_r");
  //query dB to register new account w/above parameters
  sessionStorage.setItem("nfp_sessionSTR_uniq", gen_random_str());
  //store sessionID in dB
};

logi_b.onclick = function () {
  var email_l = document.getElementById("email_l");
  var passwd_l = document.getElementById("passwd_l");
  //query dB to confirm account crednetials w/above parameters
  sessionStorage.setItem("nfp_sessionSTR_uniq", gen_random_str());
  //store sessionID in dB
};
