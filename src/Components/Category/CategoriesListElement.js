import React from 'react';
import Defaults from '../../Helpers/Defaults';

const CategoriesListElement = (props) => {
  return (
    <div className={props.isActive ? 'button' : 'button button-inactive'} id={'element' + props.item.id} onClick={(e) => props.setActiveItem(props.item)}>
        <span className="name">{props.item.translations[Defaults().locale()].name}</span>
    </div>
  );
}

export default CategoriesListElement;
