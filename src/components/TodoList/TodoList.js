import React from 'react';

import TodoItem from './TodoItem';

import './TodoList.scss';

const TodoList = ({ todoData, onItemDelete, onToggleItemDone, onToggleItemImportant }) => {
  return (
    <ul className="todo-list  list-group">
      {todoData.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            <TodoItem item={item}
                      onDelete={onItemDelete}
                      onToggleDone={() => onToggleItemDone(item.id)}
                      onToggleImportant={() => onToggleItemImportant(item.id)}
            />
          </li>);
      })}
    </ul>
  );
};

export default TodoList;
