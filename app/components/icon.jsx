import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Icon extends Component {
    render() {
        const className = classNames('fa', `fa-${this.props.type}`, this.props.className);
        return <i ref="icon" className={className} onClick={this.props.onClick}></i>;
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired
};
