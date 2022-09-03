var topBar = document.getElementById("topBar");
var sticky = topBar.offsetTop;

window.onscroll = function() {scroll()};

function scroll() {
  if (window.pageYOffset > sticky) {
    topBar.classList.add("sticky");
  } else {
    topBar.classList.remove("sticky");
  }
  
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openNav() {
    document.getElementById("sideBar").style.width = "250px";
}
  
function closeNav() {
	document.getElementById("sideBar").style.width = "0";
}
