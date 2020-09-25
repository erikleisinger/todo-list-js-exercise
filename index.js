// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  let task = {
    title,
    description,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function () {
      this.complete = true;
    }
  }
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Litter", "Clean the cat litter"); // task 0
const task2 = newTask("Laundry", "do it"); // task 1

console.log(task1);

task1.logState();
task1.completeTask();
task1.logState();
