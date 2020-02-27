import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
