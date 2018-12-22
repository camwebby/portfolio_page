
window.onscroll = function() {
  myFunction()
};

var bloc = document.getElementById("bloc");
var sticky = bloc.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    bloc.classList.add("sticky")
  } else {
    bloc.classList.remove("sticky");
  }
}
