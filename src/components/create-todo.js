import React from 'react';

export default class CreateTodo extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>create</button>
      </form>
    );
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.createTodo(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}
