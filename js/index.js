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
  var countDownDate = new Date("Sep 1, 2020 00:00:00").getTime();

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
