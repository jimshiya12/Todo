import React from 'react';

//import components
import Todo  from './Todo';

const TodoList = ({todos, setTodos, filterTodo}) => {
  
    return(
        <div className="todo-container">
            <ul className="todo-list">
               {filterTodo.map((todo) => (
                   <Todo setTodos={setTodos}
                    todos={todos}
                    text={todo.text} 
                    todo={todo} 
                    key={todo.id}/>
               ))}
               
            </ul>
        </div>

    );

    
};

export default TodoList;