document.getElementById("nav-btn").addEventListener("click", function () {
  console.log("clicked");
  let bodyColor = document.getElementById("body");
  bodyColor.style.backgroundColor = changeBodyColor();
});
