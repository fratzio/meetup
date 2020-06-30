import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  constructor() {
    // Call the superclass constructor
    // so React can initialize it
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      events: [],
    };
  }

  render() {
    let { events } = this.state.events;
    return (
      <div className="App">
        <CitySearch />
        <EventList events={events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
