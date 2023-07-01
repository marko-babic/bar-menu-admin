import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Quantity from './Quantity';

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('Quantity component', () => {
  it('should update the item quantity when input value changes', () => {
    const updateItemMock = jest.fn();
    const item = { quantity: 0 };
    const index = 0;

    const { getByLabelText } = render(
      <Quantity updateItem={updateItemMock} item={item} index={index} />
    );

    const quantityInput = getByLabelText('labels.quantity 1');

    fireEvent.change(quantityInput, { target: { value: '5' } });

    expect(updateItemMock).toHaveBeenCalledTimes(1);
    expect(updateItemMock).toHaveBeenCalledWith({ ...item, quantity: '5' });
  });
});
