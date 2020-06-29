import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    num: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ num: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="text"
          value={this.state.num}
          className="NumberInput"
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
