import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  // Initialize the state to an empty object so we can destructure it later
  state = {
    events: [],
    page: 5,
    lat: null,
    lon: null,
  };

  componentDidMount() {
    // Make a call to getEvents by default ommitting the lat and lon args
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((events) =>
        this.setState({ lat, lon, events })
      );
    } else if (lat && lon && page) {
      getEvents(lat, lon, page).then((events) =>
        this.setState({ events, lat, lon, page })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((events) =>
        this.setState({ events, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((events) => this.setState({ events }));
    }
  };

  render() {
    let { events } = this.state;
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
