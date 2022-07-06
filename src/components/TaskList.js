import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()){
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTasks(taskUpdated);
    }
  };

  const removeTask = id => {
    const taskUpdated = tasks.filter(task => task.id !== id);
    setTasks(taskUpdated);
  };

  const finishTask = id => {
    const taskUpdated = tasks.map(task => {
      if (task.id === id) {
        task.finish = !task.finish;
      }
      return task;
    });
    setTasks(taskUpdated);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='list-task-container'>
        {
          tasks.map((task) => 
            <Task 
              key = {task.id}
              id = {task.id}
              text = {task.text}
              finish = {task.finish}
              finishTask = {finishTask}
              removeTask = {removeTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;