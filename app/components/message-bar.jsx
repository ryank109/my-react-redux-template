import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import Icon from 'lm/components/icon';

export const Types = {
    ERROR: 'error',
    INFO: 'info',
    WARNING: 'warning'
};

function getClassName(type) {
    switch (type) {
        case Types.ERROR:
            return 'sbm-message-bar--error';
        case Types.WARNING:
            return 'sbm-message-bar--warning';
        default:
            return 'sbm-message-bar--info';
    }
}

function getIconType(type) {
    switch (type) {
        case Types.ERROR:
        case Types.WARNING:
            return 'exclamation-triangle';
        default:
            return 'info-circle';
    }
}

export default class MessageBar extends Component {
    render() {
        const className = classNames('sbm-message-bar', getClassName(this.props.type), this.props.className);
        return (
            <div className={className}>
                {this.props.showIcon && <Icon className="sbm-message-bar__icon" type={getIconType(this.props.type)} />}
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{__html: this.props.message}} />
            </div>
        );
    }
}

MessageBar.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string.isRequired,
    showIcon: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};

MessageBar.defaultProps = {
    showIcon: false,
    type: Types.INFO
};
