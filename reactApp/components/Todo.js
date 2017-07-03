import React from 'react';
import ReactDOM from 'react-dom';

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
          <li className='striked'><button onClick={this.props.xClick}>X</button><strike>{this.props.task.taskText}</strike></li>)
        : (
          <li className='onGoing'><button onClick={this.props.xClick}>X</button>{this.props.task.taskText}</li>
        )}
      </div>
    )
  }
}

export default Todo;
