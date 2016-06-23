import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { Modal } from 'react-redux-popup';
import Icon from 'rk/components/icon';

export default function(CompositComponent) {
    class ModalContainer extends Component {
        render() {
            const className = classNames('rk-modal__container', this.props.className);
            const style = {
                height: `${this.props.height}px`,
                width: `${this.props.width}px`
            };
            return (
                <div className={className} style={style}>
                    <div className="rk-modal-header">
                        <span className="rk-modal-header__title">{this.props.title}</span>
                        <Icon className="rk-modal-header__close"
                            type="close"
                            onClick={() => this.props.closePopup(this.props.id)}
                        />
                    </div>
                    <CompositComponent {...this.props}/>
                </div>
            );
        }
    }

    ModalContainer.propTypes = {
        className: PropTypes.string,
        closePopup: PropTypes.func.isRequired,
        height: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired
    };

    const rkModal = Modal(ModalContainer);
    rkModal.defaultProps = {
        layoverClassName: 'rk-modal-layover',
        popupClassName: 'rk-modal rk-modal--show'
    };
    return rkModal;
}
