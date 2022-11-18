import { createBrowserHistory } from "history";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from "./modules";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};
export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, appReducer(history));

const getMiddlewares = () => applyMiddleware(thunk, routerMiddleware(history));

export default function (preloadedState) {
    const store = createStore(
        // appReducer(history),
        persistedReducer,
        preloadedState,
        composeWithDevTools(getMiddlewares()),
    );
    // return store
    let persistor = persistStore(store)

    return { store, persistor }
}
