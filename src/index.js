import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers.js';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

/* provider take care of passing down the store to all the components down the component tree */
