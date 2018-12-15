import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

/***funcion reductora sin el combineReducers  */
/*const reducer = (state,action) => {
  switch (action.type) {
    case 'ADD_TO_CART':*/
    /*  return {...state,*/ /*Copiamos el estado actual */
  /*    cart: state.cart.concat(action.product),
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
            cart : state.cart.filter(product => product.id !== action.product.id)
      };
     case 'REPLACE_PRODUCTS':
        return {
          ...state,
          products : action.products
        };
    default:
      return state;

  };
};*/


const products = (state=[],action) => {
  switch (action.type) {
     case 'REPLACE_PRODUCTS':
        return action.products;
    default:
      return state;
  }
};

const cart = (state=[],action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.concat(action.product);
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.product.id);
    default:
      return state;
  }
};

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};


//export default createStore(reducer,{ cart: [], products: [] },applyMiddleware(logger,thunk))

export default createStore(combineReducers({ cart, products }),applyMiddleware(logger,thunk))
