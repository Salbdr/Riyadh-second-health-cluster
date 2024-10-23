// for fixed navbar with javascript in other file  if dont use positon:sticy

window.onscroll = function () {
  var navbar = document.getElementsByClassName("mynavbar")[0];
  var innernavbar = document.getElementById("inner-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("mytop");
    innernavbar.classList.add("wd80");    
  } else {
    navbar.classList.remove("mytop");
    innernavbar.classList.remove("wd80");
  }
};

