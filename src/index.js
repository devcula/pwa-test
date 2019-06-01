import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { appReducer } from "./redux/reducers";
import * as serviceWorker from './serviceWorker';

const store = createStore( appReducer );

 ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
