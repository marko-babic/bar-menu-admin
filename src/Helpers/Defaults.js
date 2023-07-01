const Defaults = () => {
  const category = () => {
    const defaultCategory = {
      id: null,
      translations: {
        sl: {
          name: ""
        },
        en: {
          name: ""
        }
      },
      category: null,
      style: 'cards',
      index: 0,
      show: 1,
    }

    return defaultCategory;
  }

  const item = () => {
    const defaultItem = {
      id: null,
      categoryId: 0,
      subcategoryId: 0,
      index: 0,
      show: true,
      pricesAndQuantities: [
        {
          id: null,
          price: '',
          quantity: ''
        },
      ],
      translations: {
        sl: {
          name: "",
          description: "",
          descriptionMini: ""
        },
        en: {
          name: "",
          description: "",
          descriptionMini: ""
        }
      }
    }

    return defaultItem;
  }

  const quantity = () => {
    const defaultQuantity = {
      price: '',
      quantity: ''
    };

    return defaultQuantity;
  }

  const locale = () => {
    return 'sl';
  }

  return {
    category,
    item,
    quantity,
    locale,
  };
};

export default Defaults;
