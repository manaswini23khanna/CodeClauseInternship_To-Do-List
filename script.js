function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var deleteButton = document.createElement("button");

    span.textContent = taskInput.value;
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
  }
}
