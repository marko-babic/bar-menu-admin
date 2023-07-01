import React from 'react';

const Item = (props) => {
  const getClassName = () => {
    return props.item.id === props.active ? 'button' : 'button button-inactive';
  }

  return (
    <div
      className={getClassName()}
      onClick={() => props.setActiveItem(props.item)}
    >
      <span>{props.item.translations.sl.name}</span>
    </div>
  );
}

export default Item;
