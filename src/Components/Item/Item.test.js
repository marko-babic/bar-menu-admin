import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Item from './Item';

describe('Item component', () => {
  it('should set the active item when clicked', () => {
    const setActiveItemMock = jest.fn();
    const item = {
      id: 1,
      translations: {
        sl: {
          name: 'Item 1'
        }
      }
    };
    const activeItemId = 1;

    const { getByText } = render(
      <Item
        setActiveItem={setActiveItemMock}
        item={item}
        active={activeItemId}
      />
    );

    const itemElement = getByText('Item 1');

    fireEvent.click(itemElement);

    expect(setActiveItemMock).toHaveBeenCalledTimes(1);
    expect(setActiveItemMock).toHaveBeenCalledWith(item);
  });

  it('should have the correct className based on active state', () => {
    const setActiveItemMock = jest.fn();
    const item = {
      id: 1,
      translations: {
        sl: {
          name: 'Item 1'
        }
      }
    };
    const activeItemId = 1;

    const { container } = render(
      <Item
        setActiveItem={setActiveItemMock}
        item={item}
        active={activeItemId}
      />
    );

    const itemDiv = container.firstChild;

    expect(itemDiv).toHaveClass('button');
    expect(itemDiv).not.toHaveClass('button-inactive');
  });
});