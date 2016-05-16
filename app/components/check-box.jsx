import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class CheckBox extends Component {
    render() {
        const className = classNames('sbm-checkbox', this.props.className);
        return (
            <label className={className}>
                <input
                    checked={this.props.isChecked}
                    onChange={this.onChange.bind(this)}
                    ref="checkBox"
                    type="checkbox"
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

CheckBox.propTypes = {
    className: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

CheckBox.defaultProps = {
    isChecked: false
};
