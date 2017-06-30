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
        {this.props.todos.map((taskobj) => <Todo task={taskobj}/>)}
      </ul>
    )
  }
}


export default TodoList;
