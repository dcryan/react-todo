import React from 'react';
import TodosListHeader from './todos-list-header.js';
import TodosListItem from './todos-list-item.js';

export default class TodosList extends React.Component {
  renderItems() {
    return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} {...this.props}/>);
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
