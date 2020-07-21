import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 15930660903000,
      duration: 7200000,
      id: '271513594',
      name:
        'Film industry talents wanted! Event speakers wanted! Guest producers wanted!',
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 15935720400000,
      local_date: '2020-06-30',
      local_time: '20:00',
      updated: 1593066093000,
      utc_offset: -252000000,
      waitlist_count: 0,
      yes_rsvp_count: 3,
      venue: {
        id: 26906060,
        name: 'Online event',
        repinned: false,
        country: '',
        localized_country_name: '',
      },
      is_online_event: true,
      group: {
        created: 1037993452000,
        name: 'Vancouver Independent Film Industry Network',
        id: 61320,
        join_mode: 'open',
        lat: 49.279998779296875,
        lon: -123.12000274658203,
        urlname: 'VancouverFilm',
        who: 'Independent Film Networkers',
        localized_location: 'Vancouver, BC',
        state: 'BC',
        country: 'ca',
        region: 'en_US',
        timezone: 'Canada/Pacific',
      },
      link: 'https://www.meetup.com/VancouverFilm/events/271513594/',
      description:
        '<p>Film industry talents wanted! Event speakers wanted!<br/>Guest producers wanted!</p> <p>Please sign up here to see how we can work together:<br/><a href="https://tinyurl.com/yct48y55" class="linkified">https://tinyurl.com/yct48y55</a></p> <p>============================<br/>For more details, join us every Tuesday<br/>8 pm – 10 pm<br/>Pacific Standard Time<br/>via<br/>same zoom link:<br/><a href="https://us02web.zoom.us/j/83040148309" class="linkified">https://us02web.zoom.us/j/83040148309</a><br/>============================<br/>For our international members, please check the time<br/>in your time zone:<br/><a href="https://www.timeanddate.com/time/map/" class="linkified">https://www.timeanddate.com/time/map/</a></p> <p>============================</p> <p>Contact us:<br/><a href="http://showtalenttalentshow.com" class="linkified">http://showtalenttalentshow.com</a><br/>ShowTalentTalentShow@gmail.com<br/>Team@ShowTalent-TalentShow.com<br/>Text only:[masked]</p> <p>========================</p> ',
      visibility: 'public',
      member_pay_fee: false,
    };

    EventWrapper = shallow(<Event event={event} />);
  });

  test('test that component is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test event summary children exist', () => {
    expect(EventWrapper.find('.eventSummary').children()).toHaveLength(7);
  });

  test('test render event time', () => {
    expect(EventWrapper.find('.localTime')).toHaveLength(1);
  });
  test('test render event date', () => {
    expect(EventWrapper.find('.localDate')).toHaveLength(1);
  });
  test('test render event name', () => {
    expect(EventWrapper.find('.eventName')).toHaveLength(1);
  });
  test('test render group name', () => {
    expect(EventWrapper.find('.groupName')).toHaveLength(1);
  });
  test('test render people attending', () => {
    expect(EventWrapper.find('.eventAttending')).toHaveLength(1);
  });

  test('test event details collapsed by default', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('test render full event details when details button is clicked', () => {
    expect(EventWrapper.state('showDetails')).toEqual(false);
    EventWrapper.find('.eventButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('test that full event details children are rendered when details button is clicked', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find('.unfurlEventDetails').children()).toHaveLength(1);
  });

  test('test that full event details collapses when button is clicked once more', () => {
    expect(EventWrapper.state('showDetails')).toEqual(true);
    EventWrapper.find('.eventButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('test render show details button', () => {
    expect(EventWrapper.find('.eventButton')).toHaveLength(1);
  });

  test('Test mock event data as state', () => {
    expect(EventWrapper.find('.eventAttending').text()).toBe(
      'Confirmed Attending: 3'
    );
  });
});
