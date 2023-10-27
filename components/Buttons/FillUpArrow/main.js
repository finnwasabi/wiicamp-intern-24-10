const myButton = document.getElementById("go-to-top-btn");
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myButton.style.display = "flex";
  } else {
    myButton.style.display = "none";
  }
}

window.onscroll = function scrollToTop() {
  scrollFunction();
};
