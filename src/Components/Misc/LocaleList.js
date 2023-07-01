import React from 'react';
import Misc from '../../Helpers/Misc.js';
import Locale from '../../Components/Misc/Locale'

function LocaleList(props) {
  function getAvailableTranslations() {
    return props.display ? Misc.getAvailableTranslations() : [];
  }

  const localeList = getAvailableTranslations().map((locale) => {
    return <Locale setActiveLocale={props.setActiveLocale} key={locale} locale={locale} active={props.activeLocale} />
  });

  return localeList;
}

export default LocaleList;
