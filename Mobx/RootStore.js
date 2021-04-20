import React from 'react';
import {CartStore} from './CartStore';
import {UserStore} from './UserStore';
export class RootStore {
  constructor() {
    this.cartStore = new CartStore(this);
    this.UserStore = new UserStore(this);
  }
}

export const store = new RootStore();

export const storeContext = React.createContext(store);
