import { IndexRoute, Router, Route } from 'react-router';
import App from 'rk/app';
import MyModule from 'rk/mymodule';

export default function AppRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MyModule} />
            </Route>
        </Router>
    );
}
