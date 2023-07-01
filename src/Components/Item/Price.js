import React from 'react';
import { useTranslation } from 'react-i18next';

const Price = (props) => {
  const { t } = useTranslation();

  const handlePriceChange = (event) => {
    props.updateItem({...props.item, price: event.target.value});
  };

  return (
    <div>
      <label className="input-label" htmlFor={'price' + (props.index + 1)}> {t('labels.price')} {props.index + 1}</label>
      <input type="text" id={'price' + (props.index + 1)} onChange={handlePriceChange} value={props.item.price} className="input-field" /> <br />
    </div>
  );
};

export default Price;
