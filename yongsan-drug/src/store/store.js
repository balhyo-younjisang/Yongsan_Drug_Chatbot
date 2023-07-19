import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";

// redux-persist
import { persistStore } from "redux-persist";
// save the data at localStorage
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

// persist configuration
const persistConfig = {
    key: 'root',
    storage: storage,
}


// create persiste reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer, middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }), });
// create persist store
export const persistor = persistStore(store)
