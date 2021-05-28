import axios from 'axios';
import store from '../state/store/configureStore';

const uri = 'https://fakest-newzz.herokuapp.com/api/articles';
const Articles = {
  async getAll() {    
    const response = await axios.get(uri);
    return response.data.articles;
  },
  async getSpecific(id) {
    const response = await axios.get(`${uri}/${id}`);
    return response.data.article;
  },
  async getInCategory(category) {
    const response = await axios.get(`${uri}/${category}`);
    store.dispatch({
      type: 'SET_CATEGORY_VIEW',
      payload: {
        category: category,
        articlesInCategory: response.data.articles,
      },
    });
  },
};
export default Articles;
