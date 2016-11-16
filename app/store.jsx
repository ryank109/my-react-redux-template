import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'rk/reducers';

function initializeDevToolsExtension() {
    return window.devToolsExtension({
        serializeAction: (key, value) => {
            if (typeof value === 'symbol') return String(value);
            return value;
        }
    });
}

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const devToolsExtension = process.env.NODE_ENV !== 'production'
    ? (window.devToolsExtension ? initializeDevToolsExtension() : (f => f))
    : (f => f);
const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunk),
    devToolsExtension)(createStore);
export default createStoreWithMiddleware(reducers);
