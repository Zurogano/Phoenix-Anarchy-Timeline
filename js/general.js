var topBar = document.getElementById("topBar");
var sticky = topBar.offsetTop;

window.onscroll = function() {myFunction()};

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

