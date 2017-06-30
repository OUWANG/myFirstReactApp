import React from 'react';
import ReactDOM from 'react-dom';

//==================== InputLine ============================

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  click(e) {
    e.preventDefault();
    this.props.submit("test task")
  }
  render(){
    return (
        <form>
          <input type='task' placeholder='task'></input>
          <input onClick={(e) => this.click(e)} type='submit' value='Add todo'></input>
        </form>
    )
  }
}

export default InputLine;
