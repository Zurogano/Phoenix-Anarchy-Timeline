const hidePopup = document.getElementsByClassName("close")[0];
const popup = document.getElementById("image-popup");
const topBar = document.getElementById("topBar");
const body = document.querySelector("body");
const container = $("#body");
var sticky = topBar.offsetTop;

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (window.pageYOffset > sticky) {
    topBar.classList.add("sticky");
  } else {
    topBar.classList.remove("sticky");
  }

  var winScroll = document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  body.style.overflow = "hidden"
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  body.style.overflow = "auto"
}

hidePopup.onclick = function () {
  popup.style.display = "none";
  body.style.overflow = "auto";
};

function showImagePopup(file) {
  var popupImg = document.getElementById("img01");

  popup.style.display = "block";
  popupImg.src = file;

  body.style.overflow = "hidden";
}
