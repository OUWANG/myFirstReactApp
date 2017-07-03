import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
var dummyData = [{taskText: 'washing dishes', completed: true}, {taskText: 'go party', completed: false}, {taskText: 'be cool', completed: true}, {taskText: 'July 4th be crazy', completed: false}];

//==================== TodoApp ==========================

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  removeTodo(index){
    dummyData.splice(index,1);
    this.setState({todos: dummyData});
  }

  toggle(index){
    if(dummyData[index].completed){
      dummyData[index].completed = false;
    } else {
      dummyData[index].completed = true;
    }
    this.setState({todos: dummyData});
  }

  addTodo(task){
    dummyData.push({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }

  componentDidMount() {
    this.setState({todos: dummyData});
  }

  render(){
    return (
      <div>
      <InputLine submit={(t) => this.addTodo(t)}/>
      <TodoList todos={this.state.todos}
        todoXClick={(t) => this.removeTodo(t)}
        todoToggle={(t) => this.toggle(t)}
      />
    </div>
    )
  }
}

export default TodoApp;
