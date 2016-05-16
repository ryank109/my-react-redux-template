import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { map } from 'lodash/fp';

export default class Select extends Component {
    render() {
        const className = classNames('sbm-select', this.props.className);
        return (
            <select
                className={className}
                onChange={this.onChange.bind(this)}
                ref="select"
                value={this.props.value}
            >
                {this.renderOptions()}
            </select>
        );
    }

    renderOptions() {
        return map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ), this.props.options);
    }

    onChange(event) {
        this.props.onChange(event.target.value);
    }
}

Select.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string
};
