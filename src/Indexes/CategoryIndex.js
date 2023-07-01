import React, { useState, useEffect, useCallback } from 'react';
import CategoriesList from '../Components/Category/CategoriesList.js';
import ActiveCategory from '../Components/Category/ActiveCategory';
import Client from '../Infrastructure/Http/Client';
import Defaults from '../Helpers/Defaults';
import Misc from '../Helpers/Misc.js';
import LocaleList from '../Components/Misc/LocaleList.js';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const CategoryIndex = (props) => {
  const [categories, setCategories] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [activeLocale, setActiveLocale] = useState(Defaults().locale());
  const { t } = useTranslation();

  const filterCategories = useCallback((data) => {
    return data.filter((item) => {
      return item.category === props.category;
    });
  }, [props.category]);

  useEffect(() => {
    async function fetchData() {
      const data = await Client.getAllCategories();
      const filteredCategories = filterCategories(data);
      setCategories(filteredCategories);
      setActiveItem(filteredCategories[0] ?? null);
    }
    fetchData();
  }, [filterCategories]);

  function addNewCategoryElement() {
    const category = Defaults().category();
    category.category = props.category;
    category.index = Misc.getLastIndex(categories);

    setActiveItem(category);
    setActiveLocale(Defaults().locale());
  }

  async function updateItem(e, eventItem) {
    e.preventDefault();

    try {
      const category = await Client.patchCategory(eventItem);
      setCategories((prevCategories) =>
        prevCategories.map((category) => {
          if (category.id === eventItem.id) {
            return eventItem;
          }
          return category;
        })
      );
      setActiveItem(category);
      toast.success(t('responses.success'), {});
    } catch (error) {
      toast.error(t('responses.error'), {});
    }
  }

  async function addItem(e, eventItem) {
    e.preventDefault();

    try {
      const category = await Client.createCategory(eventItem);
      setCategories([...categories, category]);
      setActiveItem(category);
      toast.success(t('responses.success'), {});
    } catch (error) {
      toast.error(t('responses.error'), {});
    }
  }

  return (
    <>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <div className="main-header">
          <button className="button button-inactive" onClick={addNewCategoryElement}>
            + {t('actions.add_category')}
          </button>
          {activeItem ? (
            <button className="button button-inactive">
              <Link to={'/categories/' + activeItem.id}>{t('actions.view_category')}</Link>
            </button>
          ) : (
            ''
          )}
        </div>
        <div className="main-row">
          <div className="main-left">
            <div className="main-left-items">
              <CategoriesList setActiveItem={setActiveItem} items={Misc.sortItems(categories)} category={props.category} activeItem={activeItem} />
            </div>
          </div>
          <div className="main-right">
            <div>
              <div className="locale-container">
                <LocaleList setActiveLocale={setActiveLocale} activeLocale={activeLocale} display={activeItem ? true : false} />
              </div>
              <br />
              {activeItem !== null ? (
                <>
                  <ActiveCategory
                    item={activeItem}
                    key={activeItem.id}
                    updateItem={updateItem}
                    addItem={addItem}
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

export default CategoryIndex
