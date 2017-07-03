import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

//==================== TodoList ========================

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((taskobj, index) => <Todo
          task={taskobj}
          xClick={() => this.props.todoXClick(index)}
          toggle={() => this.props.todoToggle(index)}
        />)}
      </ul>
    )
  }
}


export default TodoList;
