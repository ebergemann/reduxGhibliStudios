import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state'
import './index.css';
import App from './App';

const Root = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
