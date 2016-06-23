import { Component } from 'react';
import { PopupSandbox } from 'react-redux-popup';

export default class App extends Component {
    render() {
        return (
            <div className="rk-body">
                {this.props.children}
                <PopupSandbox
                    modalTransitionName="rk-modal"
                    modalTransitionEnterTimeout={300}
                    modalTransitionLeaveTimeout={300}
                    popupTransitionName="rk-popup"
                    popupTransitionEnterTimeout={100}
                    popupTransitionLeaveTimeout={100} />
            </div>
        );
    }
}
