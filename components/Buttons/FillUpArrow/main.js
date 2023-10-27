const mybutton = document.getElementById("go-to-top-btn");
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};
