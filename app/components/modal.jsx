import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { Modal } from 'react-redux-popup';
import Icon from 'rk/components/icon';

export default function(CompositComponent) {
    class ModalContainer extends Component {
        render() {
            const className = classNames('sbm-modal__container', this.props.className);
            const style = {
                height: `${this.props.height}px`,
                width: `${this.props.width}px`
            };
            return (
                <div className={className} style={style}>
                    <div className="sbm-modal-header">
                        <span className="sbm-modal-header__title">{this.props.title}</span>
                        <Icon className="sbm-modal-header__close"
                            type="close"
                            onClick={() => this.props.closePopup(this.props.id)}
                        />
                    </div>
                    <CompositComponent {...this.props}/>
                </div>
            );
        }

        renderFooter() {
            return <div className="sbm-modal-footer">{this.props.footer}</div>;
        }
    }

    ModalContainer.propTypes = {
        className: PropTypes.string,
        closePopup: PropTypes.func.isRequired,
        height: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired
    };

    const SbmModal = Modal(ModalContainer);
    SbmModal.defaultProps = {
        layoverClassName: 'sbm-modal-layover',
        popupClassName: 'sbm-modal sbm-modal--show'
    };
    return SbmModal;
}
