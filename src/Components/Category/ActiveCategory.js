import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ActiveCategory = (props) => {
  const [item, setItem] = useState(props.item);
  const { t } = useTranslation();

  const handleNameChange = (event) => {
    const updatedTranslations = {
      ...item.translations,
      [props.locale]: {
        ...item.translations[props.locale],
        name: event.target.value
      }
    };

    const updatedItem = {
      ...item,
      translations: updatedTranslations
    };

    setItem(updatedItem);
  };

  const handleIndexChange = (event) => {
    setItem({
      ...item,
      index: parseInt(event.target.value)
    });
  }

  const handleShowChange = () => {
    setItem(prevItem => {
      return {
        ...prevItem,
        show: !prevItem.show
      }
    });
  }

  const handleStyleChange = (event) => {
    setItem({
      ...item,
      style: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (item.id) {
      props.updateItem(event, item)
    } else {
      props.addItem(event, item)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="input-label" htmlFor="position">{t('labels.position')}</label>
          <input type="number" id="position" onChange={handleIndexChange} value={item.index} className="input-field" />
        </div>
        <div>
          <label className="input-label" htmlFor="name">{t('labels.name')}</label>
          <input type="text" id="name" onChange={handleNameChange} value={item.translations[props.locale].name} className="input-field" />
        </div>
        <div>
          <label className="input-label" htmlFor="style">{t('labels.style')}</label>
          <input type="text" id="style" onChange={handleStyleChange} value={item.style} className="input-field" />
        </div>
        <div>
          <label className="input-label" htmlFor="show">{t('labels.show')}</label>
          <input type="checkbox" id="show" onChange={handleShowChange} checked={item.show} className="input-field" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="button" type='submit'> {t('actions.save')} </button>
        </div>
      </form>
    </div>
  );
}

export default ActiveCategory;
