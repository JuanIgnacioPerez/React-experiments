import React from 'react';

const TodoForm = ({ inputValue, handleChange, handleKeyPress, handleClick }) => (

    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
      <input className="todo-input col-md-6"
        placeholder={'Copie algo prro!'}
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick} className="btn-todo col-md-6">
        add
      </button>
    </div>

);

export default TodoForm;