import React from 'react';

import './TodoItem.scss';

export default function TodoItem (props) {
  const { item, onToggleDone, onToggleImportant, onDelete } = props;
  const { id, label, done, important } = item;

  let itemsClasses = 'todo-item';
  if (done) {
    itemsClasses += '  todo-item--done';
  }
  if (important) {
    itemsClasses += '  todo-item--important';
  }

  return (
    <div className={itemsClasses}>
        <span
          className="todo-item__label"
          onClick={onToggleDone}
        >{label}</span>

      <button onClick={() => onDelete(id)}>
        <i className="fa fa-trash-o"/>
      </button>
      <button onClick={onToggleImportant}>
        <i className="fa fa-exclamation"/>
      </button>
    </div>
  );
}
