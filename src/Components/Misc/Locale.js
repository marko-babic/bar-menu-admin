import React from 'react';

function Locale(props) {
  return (
    <div 
      className={props.active === props.locale ? 'button' : 'button button-inactive'} 
      onClick={(e) => props.setActiveLocale(props.locale)}
    >
      {props.locale}
    </div>
  );
}

export default Locale;
