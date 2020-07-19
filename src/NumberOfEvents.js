import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

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
    if (value <= 0) {
      this.setState({
        infoText: 'Number should be at least 1',
      });
    } else {
      this.setState({
        infoText: '',
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />
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
