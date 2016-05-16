import { IndexRoute, Router, Route } from 'react-router';
import App from 'rk/app';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    );
}
