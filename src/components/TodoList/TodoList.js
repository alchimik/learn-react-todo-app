import React from 'react';

import TodoItem from './TodoItem';

import './TodoList.scss';

const TodoList = ({ todoData }) => {
  return (
    <ul className="todo-list  list-group">
      {todoData.map((item) => <li className="list-group-item" key={item.id}><TodoItem item={item}/></li>)}
    </ul>
  );
};

export default TodoList;
