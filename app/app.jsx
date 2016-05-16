import { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="rk-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
