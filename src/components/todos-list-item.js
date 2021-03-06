import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if(this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input ref="taskName" defaultValue={task}/>
          </form>
        </td>
      );
    }

    return (
        <td
          style={taskStyle}
          onClick={this.props.toggleTodo.bind(this, task)}
        >
          {task}
        </td>
    );
  }

  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>save</button>
          <button onClick={this.onCancelClick.bind(this)}>cancel</button>
        </td>
      );
    }

    return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>edit</button>
          <button onClick={this.onDeleteClick.bind(this, this.props.task)}>delete</button>
        </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  }

  onSaveClick(event) {
    // prevent the onSubmit refresh
    event.preventDefault();

    const oldTask = this.props.task;

    this.props.saveTodo(oldTask, this.refs.taskName.value);

    this.setState({isEditing: false});
  }

  onEditClick() {
    this.setState({isEditing: true});
  }

  onCancelClick() {
    this.setState({isEditing: false});
  }

  onDeleteClick(task) {
    this.props.deleteTodo(task);
    this.setState({isEditing: false});
  }
}
