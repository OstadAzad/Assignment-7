import React, { useState } from 'react';

const TodoListApp = () => {

  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState('');

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);};

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { description: taskInput, completed: false }]);
      setTaskInput('');}};

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div> <h1>To-Do List</h1> <div>

   <input type="text" value={taskInput} 
           onChange={handleTaskInputChange}
           placeholder="Enter a new task"/>

    <button onClick={addTask}>Add Task</button> </div>
    
      <ol> 
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'double line-through' : 'none' }}
              onClick={() => toggleTaskCompletion(index)}>
              {task.description}</span>

            <button onClick={() => removeTask(index)}>Delete</button>

          </li> ))}
      </ol>

    </div>
  );
};

export default TodoListApp;

