import React from 'react';

const AppHeader = ({ totalCount, doneCount }) => {
  return (
    <header>
      <h1>My Todo List</h1>
      <div>Total: {totalCount}, Done: {doneCount}</div>
    </header>
  );
};

export default AppHeader;
