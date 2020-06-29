import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.NumberInput')).toHaveLength(1);
  });

  test("render correct default filter number [when user hasn'\t input anything]", () => {
    expect(NumberOfEventsWrapper.state('num')).toBe(32);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 108 } };
    NumberOfEventsWrapper.find('.NumberInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('num')).toBe(108);
  });
});
