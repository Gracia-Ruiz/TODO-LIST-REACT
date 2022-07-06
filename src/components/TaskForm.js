import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleShipping = e => {
    e.preventDefault();

    const newTask = {
      id : uuidv4(),
      text : input,
      finish : false
    };

    props.onSubmit(newTask);
  };

  return (
    <form className='task-form'
      onSubmit={handleShipping}>
      <input 
        className='task-input'
        type='text'
        placeholder='Escribe una tarea'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>Agregar tarea</button>
    </form>
    )
  }

  export default TaskForm;