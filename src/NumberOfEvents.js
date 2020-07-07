import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    // Call the superclass constructor
    // so React can initialize it
    // So we can pass props down from the parent component to the child component
    super(props);

    this.state = {
      num: 32,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ num: value });
    this.props.updateEvents(null, null, value);
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
