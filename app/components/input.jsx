import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Input extends Component {
    render() {
        const className = classNames({
            'sbm-input': true,
            'sbm-input--error': this.props.error
        }, this.props.className);

        const props = {
            ...this.props,
            className
        };
        return (
            <input {...props} onChange={this.onChange.bind(this)} ref="input" />
        );
    }

    onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
}

Input.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Input.defaultProps = {
    type: 'text'
};
