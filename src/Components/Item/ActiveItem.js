import React, { useState } from 'react';
import Quantity from '../Item/Quantity';
import Price from '../Item/Price';
import { useTranslation } from 'react-i18next';

const ActiveItem = (props) => {
  const [item, setItem] = useState(props.item);
  const { t } = useTranslation();

  const handleNameChange = (event) => {
    let localItem = { ...item };
    localItem.translations[props.locale].name = event.target.value;
    setItem(localItem);
  }

  const handleDescriptionChange = (event) => {
    let localItem = { ...item };
    localItem.translations[props.locale].description = event.target.value;
    setItem(localItem);
  }

  const handleIndexChange = (event) => {
    let localItem = { ...item };
    localItem.index = parseInt(event.target.value);
    setItem(localItem);
  }

  const handleSubcategoryChange = (event) => {
    let localItem = { ...item };
    localItem.subcategoryId = parseInt(event.target.value);
    setItem(localItem);
  }

  const handledescriptionMiniChange = (event) => {
    let localItem = { ...item };
    localItem.translations[props.locale].descriptionMini = event.target.value;
    setItem(localItem);
  }

  const handleShowChange = () => { 
    let localItem = { ...item };
    localItem.show = !item.show;
    setItem(localItem);
  }

  const handlePriceOrQuantiyChange =  (passedItem) => {
    let localItem = { ...item };
    
    localItem.pricesAndQuantities = localItem.pricesAndQuantities.map((item) => {
      if (item.id === passedItem.id) {
        return passedItem;
      } else {
        return item;
      }
    });

    setItem(localItem);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (item.id) {
      props.updateItem(event, item);
    } else {
      props.addItem(event, item);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="input-label" htmlFor="index">{t('labels.position')}</label>
            <input type="number" id="index" onChange={handleIndexChange} value={item.index} className="input-field" />
          </div>
          <div>
            <label className="input-label" htmlFor="subcategory">{t('labels.subcategory')}</label>
            <input type="number" id="subcategory" onChange={handleSubcategoryChange} value={item.subcategoryId} className="input-field" />
          </div>
          <div>
            <label className="input-label" htmlFor="name">{t('labels.name')}</label>
            <input type="text" id="name" onChange={handleNameChange} value={item.translations[props.locale].name} className="input-field" />
          </div>
          <div>
            <label className="input-label" htmlFor="description">{t('labels.description')}</label>
            <input type="text" id="description" onChange={handleDescriptionChange} value={item.translations[props.locale].description} className="input-field" />
          </div>
          <div>
            <label className="input-label" htmlFor="mini_description">{t('labels.mini_description')}</label>
            <input type="text" id="mini_description" onChange={handledescriptionMiniChange} value={item.translations[props.locale].descriptionMini} className="input-field" />
          </div>
          <div>
            <label className="input-label" htmlFor="show">{t('labels.show')}</label>
            <input type="checkbox" id="show" onChange={handleShowChange} checked={item.show} className="input-field" />
          </div>
          {
            item.pricesAndQuantities.map((item, index) => {
              return [<Quantity updateItem={handlePriceOrQuantiyChange} item={item} key={item.id + 'quantity'} index={index} />, <Price updateItem={handlePriceOrQuantiyChange} item={item} key={item.id + 'price'} index={index} />]
            })
          }
          <div>
            <button className="button" onClick={props.addNewQuantity}>{t('actions.add_quantity')}</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="button" type='submit'> {t('actions.save')} </button>
          </div>
        </form>
    </div>
  );
}

export default ActiveItem;
