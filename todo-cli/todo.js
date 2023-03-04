
const todoList = () => {
    const all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index1) => {
      all[index1].completed = true;
    };
  
    const overdue = () => {

      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {

      return all.filter((todo) => {
        return todo.dueDate === today;
      });
    };
  
    const dueLater = () => {
      
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    const toDisplayableList = (list1) => {
      const formattedItems = list1
      .map(todo => {
        return `${todo.completed ? '[x]' : '[ ]'} ${todo.title} ${todo.dueDate === today ? '' : todo.dueDate}`
      });
    
      return formattedItems.join('\n').trim();
    }
    
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };
    
    var date = new Date();
    const today = formattedDate(date);
    const yesterday = formattedDate(
      new Date(new Date().setDate(date.getDate() - 1))
    );
    const tomorrow = formattedDate(
      new Date(new Date().setDate(date.getDate() + 1))
    );
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
      today,
      yesterday,
      tomorrow,
    };
  };
  
  
  module.exports = todoList;
