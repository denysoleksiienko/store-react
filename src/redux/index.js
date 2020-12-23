import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';
import watchFetchProducts from './ducks/products';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);
sagaMiddleware.run(watchFetchProducts);
