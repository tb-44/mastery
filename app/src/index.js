import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import App from './App';
import productsData from './data/products';
import promiseMiddleware from 'redux-promise-middleware';

const combReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    reducer: reducer
});

let store = createStore(combReducer, { products: productsData },
    applyMiddleware(promiseMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
