import React, { useState, useEffect } from 'react';
import Item from '../Components/Item/Item';
import ActiveItem from '../Components/Item/ActiveItem';
import Client from '../Infrastructure/Http/Client';
import  Defaults  from '../Helpers/Defaults';
import Misc from '../Helpers/Misc';
import LocaleList from '../Components/Misc/LocaleList.js';
import Sidebar from './Sidebar.js';
import BackButton from '../Components/Misc/BackButton.js';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const ItemsIndex = (props) => {
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [activeLocale, setActiveLocale] = useState(Defaults().locale());
  let { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchCategoryItems = async () => {
      const response = await Client.getCategoryItems(id);
      setActiveItem(response[0]);
      setItems(response);
    };
    fetchCategoryItems();
  }, [id]);

  const updateItem = async (e, eventItem) => {
    e.preventDefault();

    try {
      const responseItem = await Client.patchCategoryItem(eventItem);

      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === responseItem.id) {
            return responseItem;
          }
  
          return item;
        })
      );
      toast.success(t('responses.success'));
    } catch (error) {
      toast.error(t('responses.error'));
    }
  };

  const addItem = async (e, eventItem) => {
    e.preventDefault();

    try {
      const item = await Client.createItem(eventItem);

      setItems((prevItems) => [...prevItems, item]);
      setActiveItem(item);
      setActiveLocale(Defaults().locale());
      toast.success(t('responses.success'));
    } catch (error) {
      toast.error(t('responses.error'));
    }
  };

  const addNewQuantity = (e) => {
    e.preventDefault();

    const localItem = { ...activeItem };

    localItem.pricesAndQuantities.push(Defaults().quantity());

    setActiveItem(localItem);
  };

  const createNewItemDefaults = () => {
    const item = Defaults().item();
    item.categoryId = parseInt(id);
    item.index = Misc.getLastIndex(items);

    setActiveItem(item);
  };

  return (
    <>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <div className="main-header">
          <BackButton />
          <button className="button button-inactive" onClick={createNewItemDefaults}>
            {' '}
            + {t('actions.add')}{' '}
          </button>
        </div>
        <div className="main-row">
          <div className="main-left">
            <div className="main-left-items">
              {Misc.sortItems(items).map((item) => {
                return <Item setActiveItem={setActiveItem} item={item} key={item.id} active={activeItem?.id} />;
              })}
            </div>
          </div>
          <div className="main-right">
            <div>
              <div className="locale-container">
                <LocaleList setActiveLocale={setActiveLocale} activeLocale={activeLocale} display={activeItem ? true : false} />
              </div>
              <br />
              {activeItem ? (
                <>
                  <ActiveItem
                    item={activeItem}
                    key={activeItem.id}
                    updateItem={updateItem}
                    addItem={addItem}
                    addNewQuantity={addNewQuantity}
                    locale={activeLocale}
                  />{' '}
                  <br />
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ItemsIndex;
