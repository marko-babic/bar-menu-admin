import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActiveCategory from './ActiveCategory';

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key }),
}));

describe('ActiveCategory component', () => {
  const item = {
    id: 1,
    index: 2,
    translations: { en: { name: 'Category' }, sl: { name: 'Kategorija' } },
    style: 'bold',
    show: true,
  };
  const itemWithoutId = {
    index: 2,
    translations: { en: { name: 'Category' }, sl: { name: 'Kategorija' } },
    style: 'bold',
    show: true,
  };
  const locale = 'en';
  const updateItem = jest.fn().mockImplementation((e) => e.preventDefault());
  const addItem = jest.fn().mockImplementation((e) => e.preventDefault());
  
  test('renders all form inputs', () => {
    const { getByLabelText, getByText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    expect(getByLabelText('labels.position')).toBeInTheDocument();
    expect(getByLabelText('labels.name')).toBeInTheDocument();
    expect(getByLabelText('labels.style')).toBeInTheDocument();
    expect(getByLabelText('labels.show')).toBeInTheDocument();
    expect(getByText('actions.save')).toBeInTheDocument();
  });

  test('updates name input value', () => {
    const { getByLabelText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const nameInput = getByLabelText('labels.name');
    fireEvent.change(nameInput, { target: { value: 'New Category Name' } });

    expect(nameInput.value).toBe('New Category Name');
  });

  test('updates index input value', () => {
    const { getByLabelText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const indexInput = getByLabelText('labels.position');
    fireEvent.change(indexInput, { target: { value: '3' } });

    expect(indexInput.value).toBe('3');
  });

  test('updates style input value', () => {
    const { getByLabelText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const indexInput = getByLabelText('labels.style');
    fireEvent.change(indexInput, { target: { value: 'cards' } });

    expect(indexInput.value).toBe('cards');
  });

  test('toggles show input value', () => {
    const { getByLabelText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const showInput = getByLabelText('labels.show');
    fireEvent.click(showInput);

    expect(showInput.checked).toBe(false);
  });

  test('calls updateItem function on button click when item has an id', () => {
    const { getByText } = render(
      <ActiveCategory item={item} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const saveButton = getByText('actions.save');
    fireEvent.submit(saveButton);

    expect(updateItem).toHaveBeenCalledTimes(1);
  });

  test('calls addItem function on button click when item does not have an id', () => {
    const { getByText } = render(
      <ActiveCategory item={itemWithoutId} locale={locale} updateItem={updateItem} addItem={addItem} />
    );

    const saveButton = getByText('actions.save');
    fireEvent.submit(saveButton);

    expect(addItem).toHaveBeenCalledTimes(1);
  });
});
