import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    // Call the superclass constructor
    // so React can initialize it
    // So we can pass props down from the parent component to the child component
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  eventShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <div className="eventSummary">
          <div className="localTime">{event.local_time}</div>
          <div className="localDate">{event.local_date}</div>
          <div className="eventName">{event.name}</div>
          <div className="groupName">{event.group.name}</div>
          <div className="eventAttending">{event.yes_rsvp_count}</div>
          <div
            type="button"
            className="eventButton"
            onClick={() => this.eventShowDetails()}
          >
            Details
          </div>
        </div>
        {this.state.showDetails && (
          <div className="unfurlEventDetails">
            <div className="eventDescription">{event.description}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
