import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
var dummyData = [{taskText: 'washing dishes', completed: true}, {taskText: 'go party', completed: false}, {taskText: 'be cool', completed: true}, {taskText: 'July 4th be crazy', completed: false}]
//==================== TodoApp ==========================

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(task){
    dummyData.push({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  render(){
    return (
      <div>
      <InputLine submit={(t) => this.addTodo(t)}/>
      <TodoList todos={this.state.todos}/>
    </div>
    )
  }
}

export default TodoApp;
