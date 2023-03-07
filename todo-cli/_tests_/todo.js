/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater, today, tomorrow, yesterday} = todoList();


const myModule = require('../todo');
todoList('myModule returns the correct result', () => {
  expect(myModule()).toBeEqual('expected result');
});

todoList("ToDo test Suite", () => {
  beforeAll(() => {
    add({
      title: "complete assignment",
      dueDate: yesterday,
      completed: false
    });
    add({
      title: "Pay rent",
      dueDate: today,
      completed: true
    });
  });
  test("Should add new todo", () => {
    let count = all.length
    add({
      title: "todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-IN"),
    });
    expect(all.length).toBeEqual(count+1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBeEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toBeEqual(true);
  });
  test("should Retrieves overdue items", () => {
    let count = overdue().length
    add({
      title: "Pay phone bill",
      dueDate: yesterday,
      completed: false
    });
    expect(overdue().length).toBeEqual(count+1);
  });
  test("should Retrieves due today items", () => {
    let count = dueToday().length
    add({
      title: "Pay phone bill",
      dueDate: today,
      completed: false
    });
    expect(dueToday().length).toBeEqual(count+1);
  });
  test("should Retrieves due later items", () => {
    let count = dueLater().length
    add({
      title: "Pay phone bill",
      dueDate: tomorrow,
      completed: false
    });
    expect(dueLater().length).toBeEqual(count+1);
  });
});
