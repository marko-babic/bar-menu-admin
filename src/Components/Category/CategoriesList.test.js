import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoriesList from './CategoriesList';

describe('CategoriesList', () => {
  it('renders CategoriesListElement for each item', () => {
    const items = [
      { id: 1, translations: { en: { name: 'Category 1' }, sl: { name: 'Kategorija 1' } } },
      { id: 2, translations: { en: { name: 'Category 2' }, sl: { name: 'Kategorija 2' } } },
      { id: 3, translations: { en: { name: 'Category 3' }, sl: { name: 'Kategorija 3' } } },
    ];
    const activeItem = { id: 3, translations: { en: { name: 'Category 3' }, sl: { name: 'Kategorija 3' } } }
    const setActiveItem = jest.fn();

    render(
      <CategoriesList items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
    );

    items.forEach((item) => {
      const categoryElement = screen.getByText(item.translations.sl.name);
      expect(categoryElement).toBeInTheDocument();
    });
  });
});
