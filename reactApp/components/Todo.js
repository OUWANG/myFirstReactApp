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
          <li className='onGoing'><button>X</button>{this.props.task.taskText}</li>)
        : (
          <li className='striked'><button>X</button><strike>{this.props.task.taskText}</strike></li>
        )}
      </div>
    )
  }
}

export default Todo;
