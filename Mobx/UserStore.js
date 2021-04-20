import {makeObservable, observable} from 'mobx';

export class UserStore {
  user = {
    name: 'shiv',
    mobile: '1234982467',
    houseno: 123,
    address1: 'Block B  B-192 Top Floor Pandav Nagar,  Delhi pin-110092',
  };
  constructor() {
    makeObservable(this, {
      user: observable,
      //   updateAddress: action,
    });
  }
}
