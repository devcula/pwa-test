import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { appReducer } from "./redux/reducers";
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore( appReducer, applyMiddleware(logger) );
//Below method is used instead of the first one only to see redux changes in chrome developer tools.
const store = createStore( appReducer, composeEnhancers(applyMiddleware(logger)));

 ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.register();
