import PropTypes from 'prop-types';
import { Modal } from 'react-redux-popup';

const MyModal = props => (
    <div>
        <div>Some content</div>
        <button onClick={() => props.closePopup(props.id)}>Close</button>
    </div>
);

MyModal.propTypes = {
    closePopup: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Modal(MyModal);
