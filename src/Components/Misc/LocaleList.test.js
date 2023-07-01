import React from 'react';
import { render } from '@testing-library/react';
import Misc from '../../Helpers/Misc.js';
import LocaleList from './LocaleList';


jest.mock('../../Components/Misc/Locale', () => {
  return function MockLocale(props) {
    return (
      <div data-testid={`locale-${props.locale}`}>
        {props.locale}
        <button
          onClick={() => props.setActiveLocale(props.locale)}
          data-testid={`button-${props.locale}`}
        >
          Set Active
        </button>
      </div>
    );
  };
});

describe('LocaleList component', () => {
  it('should render the correct number of locales', () => {
    const setActiveLocaleMock = jest.fn();
    const activeLocale = 'en';

    const { getAllByTestId } = render(
      <LocaleList
        setActiveLocale={setActiveLocaleMock}
        activeLocale={activeLocale}
        display={true}
      />
    );

    const localeElements = getAllByTestId(/^locale-/);

    expect(localeElements.length).toBe(2);
  });

  it('should call setActiveLocale when a locale button is clicked', () => {
    const setActiveLocaleMock = jest.fn();
    const activeLocale = 'en';

    const { getByTestId } = render(
      <LocaleList
        setActiveLocale={setActiveLocaleMock}
        activeLocale={activeLocale}
        display={true}
      />
    );

    const frButton = getByTestId('button-sl');

    frButton.click();

    expect(setActiveLocaleMock).toHaveBeenCalledTimes(1);
    expect(setActiveLocaleMock).toHaveBeenCalledWith('sl');
  });

  it('should not render any locales when display is false', () => {
    const setActiveLocaleMock = jest.fn();
    const activeLocale = 'en';

    const { queryByTestId } = render(
      <LocaleList
        setActiveLocale={setActiveLocaleMock}
        activeLocale={activeLocale}
        display={false}
      />
    );

    const localeElement = queryByTestId(/^locale-/);

    expect(localeElement).toBeNull();
  });
});
