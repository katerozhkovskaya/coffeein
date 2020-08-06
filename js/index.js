window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("bhome").classList.add("visible");
  } else {
    document.getElementById("bhome").classList.remove("visible");
  }
}

countdown();
setInterval(countdown, 1000);
function countdown() {
  const countDownDate = new Date("Sep 1, 2020 00:00:00").getTime();

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance <= 0) {
    document.getElementById("sales").classList.add("invisible");
  }
  document.getElementById("clock-b").innerHTML =
    '<span class="h1 font-weight-bold">' +
    days +
    "</span><label>" +
    declOfNum(days, ["день", "дня", "дней"]) +
    '</label><span class="h1 font-weight-bold">' +
    hours +
    "</span><label>" +
    declOfNum(hours, ["час", "часа", "часов"]) +
    '</label><span class="h1 font-weight-bold">' +
    minutes +
    "</span><label>" +
    declOfNum(minutes, ["минута", "минуты", "минут"]) +
    '</label><span class="h1 font-weight-bold">' +
    seconds +
    "</span><label>" +
    declOfNum(seconds, ["секунда", "секунды", "секунд"]) +
    "</label>";
}
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

document.getElementById("subscribe").addEventListener("click", checkEmail);

function checkEmail(value) {
  const valueMail = document.getElementById("mailto").value;
  if (!validateEmail(valueMail)) {
    document.getElementById("wrongemail-message").classList.add("visible");
  } else {
    document.getElementById("form").submit();
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
