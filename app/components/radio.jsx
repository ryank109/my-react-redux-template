import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Radio extends Component {
    render() {
        const className = classNames('sbm-checkbox', this.props.className);
        return (
            <label className={className}>
                <input
                    checked={this.props.isChecked}
                    name={this.props.name}
                    onChange={this.onChange.bind(this)}
                    ref="radio"
                    type="radio"
                    value={this.props.value}
                />
                {this.props.label}
            </label>
        );
    }

    onChange(event) {
        this.props.onChange(event.target.value);
    }
}

Radio.propTypes = {
    className: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

Radio.defaultProps = {
    isChecked: false
};

