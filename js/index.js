
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
     document.getElementById("bhome").classList.add("visible");
  } else {
    document.getElementById("bhome").classList.remove("visible");
  }
}

