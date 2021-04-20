import {action, makeObservable, observable} from 'mobx';

export class CartStore {
  cart = [];
  constructor() {
    makeObservable(this, {
      cart: observable,
      addItemToCart: action,
      removeItemFromCart: action,
      // cartTotal: computed,
    });
  }
  // add item function
  addItemToCart(cartItemToAdd) {
    const existingCartItem = this.cart.find(
      cartItem => cartItem.id === cartItemToAdd.id,
    );
    let updatedCart;
    // add quantity by 1
    if (existingCartItem) {
      updatedCart = this.cart.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem,
      );
      return (this.cart = [...updatedCart]);
    }
    // add quantiy
    updatedCart = [...this.cart, {...cartItemToAdd, quantity: 1}];
    return (this.cart = [...updatedCart]);
  }

  // remove item function
  removeItemFromCart(cartItemToRemove) {
    const existingCartItem = this.cart.find(
      cartItem => cartItem.id === cartItemToRemove.id,
    );
    let updatedCart;
    // remove from cart
    if (existingCartItem.quantity === 1) {
      updatedCart = this.cart.filter(
        cartItem => cartItem.id !== cartItemToRemove.id,
      );
      console.log('updated cart', updatedCart);
      return (this.cart = [...updatedCart]);
    }
    // subtract quantity by 1
    updatedCart = this.cart.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem,
    );
    return (this.cart = [...updatedCart]);
  }
}
