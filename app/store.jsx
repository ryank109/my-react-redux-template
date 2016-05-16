import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'rk/reducers';

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
export default createStoreWithMiddleware(reducers);
