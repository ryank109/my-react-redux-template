import { Link, Route, withRouter } from 'react-router-dom';
import { Portal } from 'react-redux-popup';
import Home from 'app/home';
import About from 'app/about';

export default props => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Portal
            modalTransitionName="modal"
            modalTransitionEnterTimeout={300}
            modalTransitionLeaveTimeout={300}
            popupTransitionName="popup"
            popupTransitionEnterTimeout={100}
            popupTransitionLeaveTimeout={100}
        />
    </div>
);

// export default withRouter(App);
