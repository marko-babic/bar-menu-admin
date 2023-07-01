import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Locale from './Locale';

describe('Locale component', () => {
  it('should set the active locale when clicked', () => {
    const setActiveLocaleMock = jest.fn();
    const activeLocale = 'en';
    const locale = 'en';

    const { getByText } = render(
      <Locale
        setActiveLocale={setActiveLocaleMock}
        active={activeLocale}
        locale={locale}
      />
    );

    const localeElement = getByText('en');

    fireEvent.click(localeElement);

    expect(setActiveLocaleMock).toHaveBeenCalledTimes(1);
    expect(setActiveLocaleMock).toHaveBeenCalledWith('en');
  });

  it('should have the correct className based on active state', () => {
    const setActiveLocaleMock = jest.fn();
    const activeLocale = 'en';
    const locale = 'en';

    const { container } = render(
      <Locale
        setActiveLocale={setActiveLocaleMock}
        active={activeLocale}
        locale={locale}
      />
    );

    const localeDiv = container.firstChild;

    expect(localeDiv).toHaveClass('button');
    expect(localeDiv).not.toHaveClass('button-inactive');
  });
});