import axios from 'axios';

const Client = {
  getAllCategories: async function () {
    const response = await axios.get(process.env.REACT_APP_CATEGORIES_ENDPOINT);
    return response.data;
  },
  
  patchCategory: async function (category) {
    const response = await axios.patch(process.env.REACT_APP_CATEGORIES_ENDPOINT + '/' + category.id, category);
    return response.data;
  },
  
  createCategory: async function (category) {
    const response = await axios.post(process.env.REACT_APP_CATEGORIES_ENDPOINT, category);
    return response.data;
  },
  
  getCategoryItems: async function (categoryId) {
    const response = await axios.get(process.env.REACT_APP_CATEGORY_ITEMS_ENDPOINT + '/' + categoryId);
    return response.data;
  },
  
  patchCategoryItem: async function (item) {
    const response = await axios.patch(process.env.REACT_APP_ITEMS_ENDPOINT + '/' + item.id, item);
    return response.data;
  },
  
  createItem: async function (item) {
    const response = await axios.post(process.env.REACT_APP_ITEMS_ENDPOINT, item);
    return response.data;
  },
  
  publishMenu: async function () {
    const response = await axios.post(process.env.REACT_APP_PUBLISH_ENDPOINT);
    return response.data;
  }
};

export default Client;
