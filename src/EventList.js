import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  // Call the superclass constructor
  // so React can initialize it
  //  So we can pass props down
  // from the parent component to the child component and desctructure it
  constructor(props) {
    super(props);
  }

  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
