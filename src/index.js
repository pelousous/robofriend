import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
/* use to manage aynchronous actions in redux */
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers.js';
import 'tachyons';

const logger = createLogger();

/* combineReducer is a function used to compose reducers in a root reducer */
const rootReducer = combineReducers({ searchRobots, requestRobots });
/* the middlewares are applied in order */
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

/* PROVIDER take care of passing down the store to all the components down the component tree */
/* CONNECT  is to use inside container component to let know the component that we can use the store */
/* the connect is a high order function that allow the component to subscribe to any state changes */
