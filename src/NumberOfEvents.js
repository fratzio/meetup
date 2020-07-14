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
        <h2 className="NumberOfEvents--title">Display no. of results</h2>
        <span>
          <input
            type="text"
            value={this.state.num}
            className="NumberInput"
            onChange={this.handleInputChanged}
          ></input>
        </span>
      </div>
    );
  }
}

export default NumberOfEvents;
