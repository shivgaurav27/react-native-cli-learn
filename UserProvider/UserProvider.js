import React, {createContext} from 'react';
import {CartStore} from '../Mobx/CartStore';
export const CartContext = createContext(null);

export const UserProvider = props => {
  const store = new CartStore();
  return (
    <CartContext.Provider value={''}>{props.children}</CartContext.Provider>
  );
};

export const useCartStore = () => React.useContext(CartContext);
