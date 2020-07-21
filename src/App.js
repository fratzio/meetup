import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { ErrorAlert } from './Alert';

class App extends Component {
  // Initialize the state to an empty object so we can destructure it later
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
  };

  componentDidMount() {
    // Make a call to getEvents by default ommitting the lat and lon args
    this.updateEvents();

    function listener() {
      if (!navigator.onLine) {
        this.setState({
          infoText:
            'No connection detected. Loading results from the cached last search if available',
        });
      } else {
        this.setState({
          infoText: '',
        });
      }
    }

    window.addEventListener('offline', listener);
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((events) =>
        this.setState({ events, lat, lon })
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
        <ErrorAlert text={this.state.infoText} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
