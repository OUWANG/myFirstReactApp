import React from 'react';
import ReactDOM from 'react-dom';

//==================== InputLine ============================

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({typedText: ''})
  }

  // click(e) {
  //   e.preventDefault();
  //   this.props.submit("test task")
  // }

  render(){
    return (
        <form>
          <input onChange={(event) => this.handleTyping(event)} type='text' value={this.state.typedText} placeholder='task'></input>
          <input onClick={(event) => this.handleSubmit(event)} type='submit' value='Add todo'></input>
        </form>
    )
  }
}

export default InputLine;
