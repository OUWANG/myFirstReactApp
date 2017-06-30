import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
const dummyData = [{taskText: 'washing dishes', completed: true}, {taskText: 'go party', completed: false}, {taskText: 'be cool', completed: true}, {taskText: 'July 4th be crazy', completed: false}]
//==================== TodoApp ==========================

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  render(){
    return (
      <div>
      <InputLine />
      <TodoList todos={this.state.todos}/>
    </div>
    )
  }
}

export default TodoApp;
