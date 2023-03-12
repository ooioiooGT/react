import React , {useState} from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  const handleChange = (change) =>{ 
    setInput(change.target.value);
  };
  const handleSubmit = (event) => { 
    event.preventDefault();

    setInput('');
   
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Add a todo' 
            value={input} 
            name='text' 
            className='todo-input'
            onChange={handleChange} 
        />
        <button className='todo-button'>Add list </button>
      
    </form>
  )
}

export default TodoForm
