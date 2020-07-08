import React, { Component } from 'react';

import { getSuggestions } from './api';

class CitySearch extends Component {
  constructor(props) {
    // Call the superclass constructor
    // so React can initialize it
    // So we can pass props down from the parent component to the child component
    super(props);

    this.state = {
      query: '',
      suggestions: [
        //   {
        //     city: 'Munich',
        //     country: 'de',
        //     localized_country_name: 'Germany',
        //     name_string: 'Munich, Germany',
        //     zip: 'meetup3',
        //     lat: 48.14,
        //     lon: 11.58,
        //   },
        //   {
        //     city: 'Munich',
        //     country: 'us',
        //     localized_country_name: 'USA',
        //     state: 'ND',
        //     name_string: 'Munich, North Dakota, USA',
        //     zip: '58352',
        //     lat: 48.66,
        //     lon: -98.85,
        //   },
      ],
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then((suggestions) => this.setState({ suggestions }));
  };

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((item) => (
            <li
              key={item.name_string}
              onClick={() =>
                this.handleItemClicked(item.name_string, item.lat, item.lon)
              }
            >
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
