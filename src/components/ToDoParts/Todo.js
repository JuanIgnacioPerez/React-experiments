import React from 'react';

const Todo = ({ originalText, todoText, handleRemove }) => (
    <li className='todo-items'
      onClick={handleRemove}
      data-text={originalText}>
      {todoText}
    </li>
)
export default Todo;