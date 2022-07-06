import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, finish, finishTask, removeTask }) {
  return (
    <div className={ finish ? 'task-container finish' : 'task-container' }>
      <div 
        className='task-text'
        onClick={() => finishTask(id)}>
        {text}
      </div>
      <div 
        className='task-container-icons'
        onClick={() => removeTask(id)}>
       <AiOutlineCloseCircle className='icon-task' />
      </div>
    </div>
  );
} 

export default Task;