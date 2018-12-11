import { createStore} from 'redux';


const reducer = (state,action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, /*Copiamos el estado actual */
      cart: state.cart.concat(action.product),}
    case 'REMOVE_PRODUCT':
      return {
        ...state,
            cart : state.cart.filter(product => product.id !== action.product.id)}
    default:
      return state;

  }
};


export default createStore(reducer,{ cart: [] })
