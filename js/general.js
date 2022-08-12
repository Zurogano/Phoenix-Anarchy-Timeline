window.onscroll = function() {myFunction()};

var topBar = document.getElementById("topBar");
var sticky = topBar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    topBar.classList.add("sticky");
  } else {
    topBar.classList.remove("sticky");
  }
}

function openNav() {
    document.getElementById("sideBar").style.width = "250px";
}
  
function closeNav() {
	document.getElementById("sideBar").style.width = "0";
}

