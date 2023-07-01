const Misc = {
    sortItems: function (items) {
      return items.sort((a, b) => a.index > b.index ? 1 : -1)
    },
    
    getLastIndex: function (items) {
      return items.reduce((carry, item) => {
        return item.index > carry ? item.index : carry
      }, 0) + 1
    },
    
    getAvailableTranslations: function () {
      return ['sl', 'en'];
    },

    getCurrentUserLocale: function() {
      return localStorage.getItem('admin-locale') || 'en';
    },

    setCurrentUserLocale: function(locale) {
      return localStorage.setItem('admin-locale', locale);
    },
  };
  
  export default Misc;
  