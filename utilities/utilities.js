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

// Card Button functions
function CardButton(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    if (document.getElementById("task-assign").innerText === "1") {
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
      let innerText = document.getElementById("card-1-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
    if (id === "card-2-btn") {
      let innerText = document.getElementById("card-2-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
    if (id === "card-3-btn") {
      let innerText = document.getElementById("card-3-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
    if (id === "card-4-btn") {
      let innerText = document.getElementById("card-4-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
    if (id === "card-5-btn") {
      let innerText = document.getElementById("card-5-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
    if (id === "card-6-btn") {
      let innerText = document.getElementById("card-6-title").innerText;
      let mainLog = document.getElementById("main-log");
      let currentTime = new Date().toLocaleTimeString();
      let p = document.createElement("p");
      p.classList.add("activity-log");
      p.innerText = `You have completed the task ${innerText} at ${currentTime}`;
      mainLog.appendChild(p);
    }
  });
}

// Clear History
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("main-log").innerHTML = " ";
  });
