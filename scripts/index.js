console.log("JS linked to html correctly");

//To select the submit button
const button = document.getElementById("submit");
console.log(button);
//To remove te submit button
//button.remove()

//To add an event listener .... click event followed by a function
button.addEventListener("click", function () {
  console.log("Button Clicked");
});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const dayList = document.getElementById("days");
//iterate over the days array and attach them to our html page
days.forEach((day) => {
  //create a list item dynamically with dom
  const li = document.createElement("li");
  li.innerText = day;
  console.log(day);
  //attach the created list item to the dayList
  dayList.appendChild(li);
});

//access the submittask button
const taskList = ["Touch some grass"];
const submitTask = document.getElementById("submit-task");
//attac an event listener immediately affect accessing submittask button
submitTask.addEventListener("click", () => {
  const description = document.getElementById("input-description").value;
  taskList.push(description);
  console.log(taskList);
});
