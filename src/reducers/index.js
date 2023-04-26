import { combineReducers } from 'redux';
import { cartReducer as cart } from './cartReducer';
import { productsReducer as products } from './productsReducer';
import { errorReducer as error } from './errorReducer';
import { loadingReducer as loading } from './loadingReducer';

export default combineReducers({
  cart,
  products,
  error,
  loading,
});
