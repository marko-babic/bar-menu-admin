import React from 'react';
import CategoriesListElement from './CategoriesListElement';

const CategoriesList = (props) => {
  let categoriesList = props.items.map((item) => {
    return <CategoriesListElement setActiveItem={props.setActiveItem} item={item} key={item.id} isActive={props.activeItem.id === item.id} />
  })

  return categoriesList;
}

export default CategoriesList;
