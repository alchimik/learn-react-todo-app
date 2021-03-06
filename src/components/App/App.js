import React from 'react';
import TodoList from '../TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends React.Component {
  nextId = 1;

  constructor (props) {
    super(props);

    this.onItemDelete = this.onItemDelete.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onToggleItemDone = this.onToggleItemDone.bind(this);
    this.onToggleItemImportant = this.onToggleItemImportant.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearchDoneStatusChange = this.onSearchDoneStatusChange.bind(this);
  }

  state = {
    todoData: [
      this.createTodoItem('wake up'),
      this.createTodoItem('drink tee', true),
      this.createTodoItem('learn react'),
      this.createTodoItem('create awesome app'),
    ],
    searchText: '',
    searchDoneStatus: null
  };

  render () {
    const { todoData, searchText, searchDoneStatus } = this.state;

    const totalCount = todoData.length;
    const doneCount = todoData.filter((item) => item.done).length;

    let visibleTodoData = todoData.filter((item) => item.label.includes(searchText));

    if (searchDoneStatus !== null) {
      visibleTodoData = todoData.filter((item) => item.done === searchDoneStatus);
    }

    return (
      <div className="container">
        <AppHeader totalCount={totalCount} doneCount={doneCount}/>
        <div className="d-flex">
          <SearchPanel onSearchTextChange={this.onSearchTextChange}/>
          <ItemStatusFilter
            done={searchDoneStatus}
            onSearchDoneStatusChange={this.onSearchDoneStatusChange}/>
        </div>
        <TodoList
          todoData={visibleTodoData}
          onItemDelete={this.onItemDelete}
          onToggleItemDone={this.onToggleItemDone}
          onToggleItemImportant={this.onToggleItemImportant}
        />
        <ItemAddForm onAddItem={this.onAddItem}/>
      </div>
    );
  }

  onItemDelete (id) {
    this.setState((state) => {
      return {
        todoData: state.todoData.filter((item) => item.id !== id)
      };
    });
  }

  onAddItem (label) {
    this.setState((state) => {
      return {
        todoData: [...state.todoData, this.createTodoItem(label)]
      };
    });
  }

  onToggleItemDone (id) {
    this.setState((state) => {
      return {
        todoData: this.toggleItemField(state.todoData, id, 'done')
      };
    });
  }

  onToggleItemImportant (id) {
    this.setState((state) => {
      return {
        todoData: this.toggleItemField(state.todoData, id, 'important')
      };
    });
  }

  findIndexById (todoData, id) {
    return todoData.findIndex((el) => el.id === id);
  }

  toggleItemField (todoData, id, field) {
    return this.setItemField(todoData, id, field, (v) => !v);
  }

  setItemField (todoData, id, field, cb) {
    const pos = this.findIndexById(todoData, id);
    const item = todoData[pos];

    return [
      ...todoData.slice(0, pos),
      { ...item, [field]: cb(item[field]) },
      ...todoData.slice(pos + 1),
    ];
  }

  createTodoItem (label, done = false) {
    return {
      id: this.nextId++,
      label: label,
      important: false,
      done: done
    };
  }

  onSearchTextChange (searchText) {
    this.setState({ searchText });
  }

  onSearchDoneStatusChange (searchDoneStatus) {
    this.setState({ searchDoneStatus });
  }
}

export default App;
