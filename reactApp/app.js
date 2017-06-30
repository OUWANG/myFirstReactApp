import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['washing dishes', 'go party', 'be cool', 'July 4th be crazy']

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
    return (
        <li><button>X</button>{this.props.task}</li>
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
        {dummyData.map((task) => <Todo task={task}/>)}
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
