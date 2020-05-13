import React from 'react';
import TodoList from '../TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel';

const App = () => {
  const todoData = [
    { id: 1, label: 'wake up', important: false },
    { id: 2, label: 'drink tee', important: false },
    { id: 7, label: 'learn react', important: true },
    { id: 11, label: 'create awesome app', important: false },
  ];

  return (
    <div className="container">
      <AppHeader/>
      <SearchPanel/>
      <TodoList todoData={todoData}/>
    </div>
  );
};

export default App;
