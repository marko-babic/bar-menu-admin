import React, { useState } from 'react';
import  Defaults  from '../Helpers/Defaults';
import Sidebar from './Sidebar.js';
import { useTranslation } from 'react-i18next';

const PreviewIndex = () => {
  const [language, setLanguage] = useState(Defaults().locale());
  const [category, setCategory] = useState('food');
  const { t } = useTranslation();

  const getUrl = () => {
    return `${process.env.REACT_APP_PREVIEW_ENDPOINT}/${language}/${category}`;
  }

  function getLanguageButtonStyle(lang) {
    return language === lang ? 'button button-inactive' : 'button button-secondary';
  }

  function getCategoryButtonStyle(cat) {
    return category === cat ? 'button button-inactive' : 'button button-secondary';
  }

  return (
    <>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <div className="main-header" style={{ textAlign: 'center' }}>
          <button className={getLanguageButtonStyle('en')} onClick={() => setLanguage('en')}>
            EN
          </button>
          <button className={getLanguageButtonStyle('sl')} onClick={() => setLanguage('sl')}>
            SL
          </button>
          <button className={getCategoryButtonStyle('food')} onClick={() => setCategory('food')}>
          {t('labels.food')}
          </button>
          <button className={getCategoryButtonStyle('drinks')} onClick={() => setCategory('drinks')}>
          {t('labels.drinks')}
          </button>
        </div>
        <div className="main-row" style={{ justifyContent: 'center' }}>
          <iframe title="Menu preview" width="780px" height="1200px" src={getUrl()} />
        </div>
      </main>
    </>
  );
}

export default PreviewIndex;
