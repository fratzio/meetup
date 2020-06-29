import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Event from './Event';

class App extends Component {
  state = {
    events: [],
  };

  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList events={this.state.events} />
        <NumberOfEvents />
        <Event />
      </div>
    );
  }
}

export default App;
