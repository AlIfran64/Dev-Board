// Box-3-date start
let box3 = document.getElementById("box-3-date");

let date = new Date();
let parts = date.toDateString().split(" ");
let formattedDate = `${parts[1]} ${parts[2]} ${parts[3]}`;

let dayElement = document.createElement("p");
dayElement.innerText = parts[0] + ",";
dayElement.style.fontSize = "20px";

let dateElement = document.createElement("p");
dateElement.innerHTML = `<strong>${formattedDate}</strong>`;
dateElement.style.fontSize = "20px";

box3.appendChild(dayElement);
box3.appendChild(dateElement);

// Box-3-date end

// Deadline date start
document.getElementById("deadline");
deadline("deadline1");
deadline("deadline2");
deadline("deadline3");
deadline("deadline4");
deadline("deadline5");
deadline("deadline6");
// Deadline date end

// New page open
document
  .getElementById("discover-new-box")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./discover.html";
  });

// Cursor adding on "Discover new box":
let cursor = document.getElementById("discover-new-box");
cursor.style.cursor = "pointer";

// Card button:
CardButton("card-1-btn");
CardButton("card-2-btn");
CardButton("card-3-btn");
CardButton("card-4-btn");
CardButton("card-5-btn");
CardButton("card-6-btn");
