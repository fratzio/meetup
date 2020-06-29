import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    event: [],
  };

  eventShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    return (
      <div className="Event">
        <div className="eventSummary">
          <div className="localTime">{this.state.event.local_time}</div>
          <div className="localDate">{this.state.event.local_date}</div>
          <div className="eventName">{this.state.event.name}</div>
          <div className="groupName"></div>
          <div className="eventAttending">
            {this.state.event.yes_rsvp_count}
          </div>
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
            <div className="eventDescription">
              {this.state.event.description}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
