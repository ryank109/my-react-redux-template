import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Badge extends Component {
    render() {
        if (this.props.value === 0) { return null; }

        const className = classNames('sbm-badge', this.props.className);
        return <span className={className}>{this.props.value}</span>;
    }
}

Badge.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired
};

Badge.defaultProps = {
    value: 0
};
