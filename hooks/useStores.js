import React from 'react';
import {storeContext} from '../Mobx/RootStore';

export const useStores = () => React.useContext(storeContext);
