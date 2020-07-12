import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given("the user hasn't clicked on any events", () => {
      AppWrapper = mount(<App />);
    });

    when('the user receives a list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    then('they should see all events with their information collapsed', () => {
      const EventWrapper = AppWrapper.find(Event);
      expect(EventWrapper.find('.unfurlEventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given('the user has received a list of upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
    when('the user clicks on an event', () => {
      AppWrapper.find('.eventButton').at(0).simulate('click');
    });

    then("the event's details are expanded in the app", () => {
      expect(AppWrapper.find('.unfurlEventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given("the user is viewing an expanded event's details", () => {
      AppWrapper.update();
      AppWrapper.find('.eventButton').at(0).simulate('click');
      expect(AppWrapper.find('.unfurlEventDetails')).toHaveLength(1);
    });

    when('the user clicks to close the event', () => {
      AppWrapper.find('.eventButton').at(0).simulate('click');
    });

    then("the event's details collapse", () => {
      expect(AppWrapper.find('.unfurlEventDetails')).toHaveLength(0);
    });
  });
});
