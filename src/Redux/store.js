import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//use redux persist for store all state in local storage.
const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
