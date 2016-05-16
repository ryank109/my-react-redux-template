import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import Icon from 'rk/components/icon';

export default class FormItem extends Component {
    render() {
        const className = classNames({
            'sbm-form-item': true,
            'sbm-form-item--error': this.props.error
        }, this.props.className);
        return (
            <div>
                <div className={className}>
                    <label className="sbm-form-item__label">{this.props.label}</label>
                    {this.renderRequiredIcon()}
                    {this.props.children}
                </div>
                {this.renderErrorMessage()}
            </div>
        );
    }

    renderRequiredIcon() {
        return this.props.isRequired
            ? <Icon className="sbm-form-item__required-icon" type="asterisk" />
            : <div className="sbm-form-item__no-required-icon"/>;
    }

    renderErrorMessage() {
        if (!this.props.error) { return null; }

        const className = classNames('sbm-form-item__error', this.props.className);
        return (
            <div className={className} >
                <label className="sbm-form-item__label"></label>
                <div className="sbm-form-item__no-required-icon"/>
                <div>{this.props.error}</div>
            </div>
        );
    }
}

FormItem.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string
};

FormItem.defaultProps = {
    isRequired: false
};
