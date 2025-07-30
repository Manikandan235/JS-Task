let taskList = [];

const addTask = (task, callback) => {
  taskList.push(task);
  callback();
};

const printTasks = function () {
  console.log("Current Tasks:");
  taskList.forEach((t, i) => console.log(`${i + 1}. ${t}`));
};

const addMultipleTasks = (...tasks) => {
  tasks.forEach(t => taskList.push(t));
  console.log(`${tasks.length} tasks added.`);
};

const globalMessage = "Task Manager Started";

function demoScope() {
  const localMessage = "Inside Function Scope";
  console.log(globalMessage);
  console.log(localMessage);
}

addTask("Buy groceries", printTasks);
addTask("Finish project", printTasks);

addMultipleTasks("Walk dog", "Read book", "Call friend");
printTasks();

demoScope();
console.log(globalMessage);
