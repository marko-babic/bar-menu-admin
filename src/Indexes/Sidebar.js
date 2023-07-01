import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import Misc from '../Helpers/Misc';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [currentUserLocale, setCurrentUserLocale] = useState(Misc.getCurrentUserLocale());

  const changeAdminLocale = (locale) => {
    if (locale === currentUserLocale) {
      return;
    }
    
    i18n.changeLanguage(locale);
    setCurrentUserLocale(locale);
    Misc.setCurrentUserLocale(locale)
  }

  function getButtonClass(locale) {
    if (locale === currentUserLocale) {
      return 'button button-primary';
    }

    return 'button button-inactive';
  }

  return (
    <div className="sidebar-content">
      <div className="sidebar-links">
        <p>
          <Link to="/food">{t('navigation.food')}</Link>
        </p>
        <p>
          <Link to="/drinks">{t('navigation.drinks')}</Link>
        </p>
        <p>
          <Link to="/preview">{t('navigation.preview')}</Link>
        </p>
        <p>
          <Link to="/publish">{t('navigation.publish')}</Link>
        </p>
        <ToastContainer autoClose={1000} position="top-right" />
      </div>
      <div className="sidebar-language">
        <button className={getButtonClass('sl')} type="button" onClick={() => changeAdminLocale('sl')}>Slo</button>
        <button className={getButtonClass('en')} type="button" onClick={() => changeAdminLocale('en')}>En</button>
      </div>
    </div>
  );
}

export default Sidebar;
