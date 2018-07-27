import React from 'react'
import emojify from '../../theme/emojify';
import Todo from './Todo';

const TodoList = ({ todos, handleRemove }) => {
    return(
        <ul style={{ padding:'10px' }} className='todo-list'>
					{todos.map(todo => 
						<Todo
							originalText={todo}
							todoText={emojify(todo)}
							handleRemove={handleRemove}
						/>
					)}
				</ul>
    )   
}

export default TodoList;