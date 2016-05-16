import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import router from 'rk/router';
import store from 'rk/store';

// require style to generate one css file
require('../styles/main.scss');

const rootElement = document.getElementById('main');
if (rootElement) {
    render(<Provider store={store}>{router(browserHistory)}</Provider>, rootElement);
}
