// Change the body color:
function changeBodyColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Deadline:
function deadline(id) {
  let deadlineDate = new Date();
  let currentDeadline = deadlineDate.toDateString().split(" ");
  let formattedDeadline = ` ${currentDeadline[2]} ${currentDeadline[1]} ${currentDeadline[3]}`;
  let deadline = document.createElement("p");
  deadline.innerHTML = `<strong>${formattedDeadline}</strong>`;
  document.getElementById(id).appendChild(deadline);
}
