const background = document.querySelector("body");
const payment_modal = document.querySelector(".payment_container");
const close_popup = document.querySelector(".click_off_popup");
const arrow = document.querySelector("#arrow");
const register = document.querySelector("#cash_register");
const counter = document.querySelector("#counter");
const reciept = document.querySelector("#reciept");
const num_coins = document.getElementById("num_coins");

function get_values() {
  //will perform necessary queries and assign initial variables
  try {
    sessionID = sessionStorage.getItem("nfp_sessionSTR_uniq");
    if (sessionID == null) {
      alert(
        "No Account Logged In!\nClick OK to return to the Home Page and Login.",
      );
      window.location.href = "index.html";
    }
  } catch (e) {
    alert(
      "No Account Logged In!\nClick OK to return to the Home Page and Login.",
    );
    window.location.href = "index.html";
  }
  num_coins.innerHTML = 5;
}

reciept.addEventListener("click", function () {
  payment_modal.classList.add("payment_open");
  background.classList.add("payment_open");
  arrow.classList.add("payment_open");
  register.classList.add("payment_open");
  counter.classList.add("payment_open");
  reciept.classList.add("payment_open");
});

close_popup.addEventListener("click", function () {
  payment_modal.classList.remove("payment_open");
  background.classList.remove("payment_open");
  arrow.classList.remove("payment_open");
  register.classList.remove("payment_open");
  counter.classList.remove("payment_open");
  reciept.classList.remove("payment_open");
});

function one_coin() {
  //pass to PayPal and await return and confirmation
  //update dB with new coin count
  num_coins.innerHTML = parseInt(num_coins.innerHTML, 10) + 1;
}

function some_coin() {
  //pass to PayPal and await return and confirmation
  //update dB with new coin count
  num_coins.innerHTML = parseInt(num_coins.innerHTML, 10) + 10;
}

function lotsa_coin() {
  //pass to PayPal and await return and confirmation
  //update dB with new coin count
  num_coins.innerHTML = parseInt(num_coins.innerHTML, 10) + 50;
}
