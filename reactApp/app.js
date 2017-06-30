import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: 'washing dishes', completed: true}, {taskText: 'go party', completed: false}, {taskText: 'be cool', completed: false}, {taskText: 'July 4th be crazy', completed: false}]

//==================== InputLine ============================

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <form>
          <input type='task' placeholder='task'></input>
          <input type='submit' value='Add todo'></input>
        </form>
    )
  }
}


//==================== Todo ============================

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var state = this.props.task.completed;
    return (
      <div>
        {(state) ? (
          <li><button>X</button>{this.props.task.taskText}</li>)
        : (
          <li><button>X</button><strike>{this.props.task.taskText}</strike></li>
        )}
      </div>
    )
  }
}

//==================== TodoList ========================


class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul>
        {dummyData.map((taskobj) => <Todo task={taskobj}/>)}
      </ul>
    )
  }
}

//==================== TodoApp ==========================

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <InputLine />
      <TodoList />
    </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
