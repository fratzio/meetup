import React, { Component } from 'react';
import { WarningAlert } from './Alert';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';

class Event extends Component {
  constructor(props) {
    // Call the superclass constructor
    // so React can initialize it
    // So we can pass props down from the parent component to the child component
    super(props);
    this.state = {
      showDetails: false,
      infoText: '',
    };
  }
  eventShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
    if (!this.props.event.description) {
      if (!this.state.showDetails) {
        this.setState({
          infoText: 'There are no extra event details provided for this event',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    } else if (this.props.event.description.length === 0) {
      if (!this.state.showDetails) {
        this.setState({
          infoText: 'There are no extra event details provided for this event',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <div className="eventSummary">
          <div className="eventName">Title: {event.name}</div>
          <div className="groupName">Group Name: {event.group.name}</div>
          <div className="localTime">Time: {event.local_time}</div>
          <div className="localDate">Date: {event.local_date}</div>

          <WarningAlert text={this.state.infoText} />
          <div
            type="button"
            className="eventButton"
            onClick={() => this.eventShowDetails()}
          >
            Details
          </div>
          {this.state.showDetails && (
            <div className="unfurlEventDetails">
              {event.rsvp_limit ? (
                <ResponsiveContainer height={300}>
                  <PieChart>
                    <Legend verticalAlign="bottom" height={36} />
                    <Pie
                      className="pieStyles"
                      dataKey="value"
                      isAnimationActive={false}
                      data={[
                        {
                          name: 'People Attending',
                          value: event.yes_rsvp_count,
                          fill: 'red',
                        },
                        {
                          name: 'Attendance Limit',
                          value: event.rsvp_limit,
                          fill: '#000',
                        },
                      ]}
                      cy={100}
                      outerRadius={60}
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="eventAttending">
                  People Attending: {event.yes_rsvp_count}
                </div>
              )}
              <div className="eventDescription">{event.description}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Event;
