import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {BrowserRouter} from "react-router-dom";


const store = createStore(reducers, applyMiddleware(thunk, logger));
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/></Provider>
        </BrowserRouter>
    </React.StrictMode>, document.querySelector('#root')
);