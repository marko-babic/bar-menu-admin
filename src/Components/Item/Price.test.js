import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Price from './Price';

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('Price component', () => {
  it('should update the item price when input value changes', () => {
    const updateItemMock = jest.fn();
    const item = { price: 0 };
    const index = 0;

    const { getByLabelText } = render(
      <Price updateItem={updateItemMock} item={item} index={index} />
    );

    const priceInput = getByLabelText('labels.price 1');

    fireEvent.change(priceInput, { target: { value: '9.99' } });

    expect(updateItemMock).toHaveBeenCalledTimes(1);
    expect(updateItemMock).toHaveBeenCalledWith({ ...item, price: '9.99' });
  });
});