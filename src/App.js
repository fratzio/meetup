import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { ErrorAlert } from './Alert';
import moment from 'moment';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

class App extends Component {
  // Initialize the state to an empty object so we can destructure it later
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    infoText: '',
  };

  componentDidMount() {
    // Make a call to getEvents by default ommitting the lat and lon args
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  };

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  };

  render() {
    let { events } = this.state;
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <ErrorAlert text={this.state.infoText} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            className="scatterChartStyles"
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" stroke="#fff" />
            <YAxis
              type="number"
              dataKey="number"
              name="number of events"
              allowDecimals={false}
              stroke="#fff"
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#fff" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
