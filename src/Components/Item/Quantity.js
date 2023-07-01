import React from 'react';
import { useTranslation } from 'react-i18next';

const Quantity = (props) => {
  const { t } = useTranslation();

  const handleQuantityChange = (event) => {
    props.updateItem({ ...props.item, quantity: event.target.value });
  };

  const index = props.index + 1;

  return (
    <div>
      <label className="input-label" htmlFor={`quantity${index}`}>
      {t('labels.quantity')} {index}
      </label>
      <input
        name={`quantity${index}`}
        type="text"
        id={`quantity${index}`}
        onChange={handleQuantityChange}
        value={props.item.quantity}
        className="input-field"
      />{' '}
      <br />
    </div>
  );
};

export default Quantity;
