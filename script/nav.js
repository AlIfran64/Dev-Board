document.getElementById("nav-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  let bodyColor = document.getElementById("body");
  bodyColor.style.backgroundColor = changeBodyColor();
});

// Back to dashboard

function backBtn() {
  document.getElementById("back-btn");
  window.location.href = "./index.html";
}
