import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { appReducer } from "./redux/reducers";
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const store = createStore( appReducer, applyMiddleware(logger) );

 ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
