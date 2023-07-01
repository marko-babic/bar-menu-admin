import React from "react";
import CategoriesListElement from "./CategoriesListElement";
import { render, screen } from "@testing-library/react";


describe('CategoriesListElement', () => {
    const item = { id: 1, translations: { en: { name: 'Category 1' }, sl: { name: 'Kategorija 1' } } }
    const setActiveItem = jest.fn();

    it('exists in the document', () => {
        render(
            <CategoriesListElement isActive={true} item={item} setActiveItem={setActiveItem} />
        );

        const categoryElement = screen.getByText(item.translations.sl.name);
        expect(categoryElement).toBeInTheDocument();
    });

    it('has active button class when isActive is true', () => {
        render(
            <CategoriesListElement isActive={true} item={item} setActiveItem={setActiveItem} />
        );

        const component = document.getElementById('element1');
        expect(component).toHaveAttribute('class', 'button')
    });


    it('has inactive button class when isActive is false', () => {
        render(
            <CategoriesListElement isActive={false} item={item} setActiveItem={setActiveItem} />
        );

        const component = document.getElementById('element1');
        expect(component).toHaveAttribute('class', 'button button-inactive')
    });
});