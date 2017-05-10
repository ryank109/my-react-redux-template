import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from 'app/reducers';
import App from 'app/app';

// require style to generate one css file
require('../styles/main.scss');

function initializeDevToolsExtension() {
    return window.devToolsExtension({
        serializeAction: (key, value) => {
            if (typeof value === 'symbol') return String(value);
            return value;
        }
    });
}

const history = createHistory();

// middlewares
const reduxRouterMiddleware = routerMiddleware(history);
// eslint-disable-next-line no-nested-ternary
const devToolsExtension = process.env.NODE_ENV !== 'production'
    ? (window.devToolsExtension ? initializeDevToolsExtension() : (f => f))
    : (f => f);
const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunk),
    devToolsExtension)(createStore);

// store
const store = createStoreWithMiddleware(reducers);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('main')
);
