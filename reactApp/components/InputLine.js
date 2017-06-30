import React from 'react';
import ReactDOM from 'react-dom';

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

export default InputLine;
