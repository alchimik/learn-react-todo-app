import React from 'react';

import './TodoItem.scss';

const TodoItem = ({ item }) => {
  const { label, important } = item;

  const style = {
    color: important ? 'tomato' : 'black'
  };

  return <div style={style}>{label}</div>;
};

export default TodoItem;
