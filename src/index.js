import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// importing REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Adding REDUCER to STORE information
const survey = (state = { feeling: '', understanding: '', support: '', comments: '' }, action) => {
    if(action.type === 'FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }

    if(action.type === 'UNDERSTAND') {
        return {
            ...state,
            understand: action.payload
        }
    }
    if(action.type === 'SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    }
    if(action.type === 'FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }
    return state;
}

// creating store

const store = createStore(
    combineReducers({
        survey,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
