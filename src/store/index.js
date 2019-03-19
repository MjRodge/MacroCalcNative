import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '../reducers';

const persistConfig = {
 key: 'root',
 storage,
 stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducers);

export const reduxStore = createStore(pReducer);
export const persistor = persistStore(reduxStore);
