import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './TodoList.css';
import TodoEditor from '../TodoEditor/TodoEditor';
import Filter from '../Filter/Filter';
const TodoList = props => {
  const {
    todo,
    deleteToDo,
    completed,
    ToggleComplete,
    addTodo,
    value,
    onFilterEnter,
  } = props;

  return (
    <div className="todoList ">
      <h3> To do list </h3>
      <Filter value={value} onFilterEnter={onFilterEnter} />
      <TodoEditor addTodo={addTodo} />
      <ul>
        {todo.map(item => {
          return (
            <li key={item.id} className="item">
              <label>
                <input
                  type="checkbox"
                  className="TodoList__checkbox"
                  checked={completed}
                  onChange={() => ToggleComplete(item.id)}
                />
                <p>{item.name} </p>
              </label>

              <button
                className="item-label-button "
                onClick={() => deleteToDo(item.id)}
              >
                <AiOutlineClose />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
