import 'materialize-css/dist/css/materialize.min.css';
import './assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import rPromise from './middleware/r_promise';

const store = createStore(rootReducer, {}, applyMiddleware(rPromise));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider> ,
    document.getElementById('root')
);

