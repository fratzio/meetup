import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default number', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given("the user hasn't specified a number", () => {
      AppWrapper.update();
    });

    when('the user searches for events in a certain location', () => {
      AppWrapper.find('.city').simulate('change', {
        target: { value: 'Munich' },
      });
    });
    let NumberOfEventsWrapper;
    NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    then('the default number of results is 32', () => {
      expect(NumberOfEventsWrapper.state('num')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of events', () => {
      AppWrapper.find('.NumberInput').simulate('change', {
        target: { value: 5 },
      });
    });

    then(
      'the number of events displayed in the results matches the number selected by the user',
      () => {
        let NumberOfEventsWrapper;
        NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        expect(NumberOfEventsWrapper.state('num')).toBe(5);
      }
    );
  });
});
