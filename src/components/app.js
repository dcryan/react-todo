import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

let todos = [
  {
    task: 'Make react tutorial',
    isCompleted: true
  },
  {
    task: 'eat dinner',
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo createTodo={this.createTodo.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo.bind(this)}
          saveTodo={this.saveTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
      </div>
    );
  }

  createTodo(todo) {
    this.state.todos.push({task:todo, isCompleted: false});
    this.setState({todos: this.state.todos});
  }

  toggleTodo(task) {
    const foundTodoIndex = this.state.todos.findIndex(todo => todo.task === task);
    const foundTodo = this.state.todos[foundTodoIndex];
    foundTodo.isCompleted = !foundTodo.isCompleted;

    this.setState({todos: this.state.todos});
  }

  saveTodo(oldTask, newTask) {
    const foundTodoIndex = this.state.todos.findIndex(todo => todo.task === oldTask);
    const foundTodo = this.state.todos[foundTodoIndex];
    foundTodo.task = newTask;

    this.setState({todos: this.state.todos});
  }

  deleteTodo(task) {
    const foundTodoIndex = this.state.todos.findIndex(todo => todo.task === task);
    this.state.todos.splice(foundTodoIndex, 1);

    this.setState({todos: this.state.todos});
  }
}
