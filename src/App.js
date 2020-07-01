import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  // Initialize the state to an empty object so we can destructure it later
  state = {
    events: [],
  };

  render() {
    let { events } = this.state;
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
