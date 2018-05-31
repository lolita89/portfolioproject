import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// #5 USING REDUX => Import Provider to connect function
import { Provider } from "react-redux";
import store from './store.js';

// {/* #6 USING REDUX => Wrap the root with Provider (provide the store with the app) */}
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
