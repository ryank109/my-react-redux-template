import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { reduce } from 'lodash/fp';

// TODO - flush the design and refactor -- change the selected prop to value
export default class SwitchToggle extends Component {
    render() {
        let selectedClassName;
        if (this.props.selected) {
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i].value === this.props.selected) {
                    selectedClassName = 'sbm-switch-toggle__selection--' + i;
                    break;
                }
            }
        }

        const selectionClassName = classNames('sbm-switch-toggle__selection', selectedClassName);

        return (
            <div className="sbm-switch-toggle">
                {this.renderOptions()}
                <span className={selectionClassName}/>
            </div>
        );
    }

    renderOptions() {
        return reduce(
            (result, option) => {
                const id = this.props.id + '_' + option.value;
                const selected = this.props.selected === option.value;
                const className = classNames({
                    'sbm-switch-toggle__label': true,
                    'sbm-switch-toggle__input--selected': selected
                });
                result.push(<input
                    id={id}
                    checked={selected}
                    className="sbm-switch-toggle__input"
                    key={`${option.value}_input`}
                    name={this.props.id}
                    onChange={this.onClick.bind(this)}
                    type="radio"
                    value={option.value}
                />);
                result.push(
                    <label
                        className={className}
                        htmlFor={id}
                        key={`${option.value}_label`}
                    >
                        {option.label}
                    </label>
                );
                return result;
            },
            [],
            this.props.options
        );
    }

    onClick(event) {
        this.props.onChange(event.target.value);
    }
}

SwitchToggle.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    selected: PropTypes.string
};
