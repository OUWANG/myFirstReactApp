import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['washing dishes', 'go party', 'be cool', 'July 4th be crazy']
//==================== TodoList ========================


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

ReactDOM.render(<TodoList />, document.getElementById('root'));
