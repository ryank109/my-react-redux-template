import { connect } from 'react-redux';
import { closePopup, openPopup } from 'react-redux-popup';
import PropTypes from 'prop-types';
import MyModal from 'app/home/modal';

export const Home = props => (
    <div>
        My Module
        <button onClick={() => props.openPopup('modal1')}>Open popup</button>
        <MyModal id="modal1" closePopup={props.closePopup}/>
    </div>
);

Home.propTypes = {
    closePopup: PropTypes.func.isRequired,
    openPopup: PropTypes.func.isRequired
};

export default connect(null, { closePopup, openPopup })(Home);
