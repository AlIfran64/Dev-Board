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

// Card Button function
function CardButton(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    if (id === "card-6-btn") {
      alert("Congrats! You have completed all the current tasks");
    }
    this.disabled = true;

    // Navbar checkbox decrement
    let checkBox = document.getElementById("nav-checkbox").innerText;
    let checkBoxDecrement = parseInt(checkBox);

    // Task Assign
    let task = document.getElementById("task-assign").innerText;
    let taskNumber = parseInt(task);

    let sub = taskNumber - 1;
    document.getElementById("task-assign").innerText = sub;
    let sum = checkBoxDecrement + 1;
    document.getElementById("nav-checkbox").innerText = sum;

    // Activity log
    if (id === "card-1-btn") {
      let innerText1 = document.getElementById("card-1-title").innerText;
      let mainLog1 = document.getElementById("main-log");
      let p1 = document.createElement("p");
      p1.classList.add("activity-log");
      p1.innerText = `You have completed the task ${innerText1}`;
      mainLog1.appendChild(p1);
    }
    if (id === "card-2-btn") {
      let innerText2 = document.getElementById("card-2-title").innerText;
      let mainLog2 = document.getElementById("main-log");
      let p2 = document.createElement("p");
      p2.classList.add("activity-log");
      p2.innerText = `You have completed the task ${innerText2}`;
      mainLog2.appendChild(p2);
    }
  });
}
