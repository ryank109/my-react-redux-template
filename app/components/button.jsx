import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Button extends Component {
    render() {
        const className = classNames('sbm-button', this.props.className);
        return (
            <button
                className={className}
                onClick={this.props.onClick}
                ref="button"
                type={this.props.type}
            >
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

Button.defaultProps = {
    type: 'button'
};
