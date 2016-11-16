import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import Button from 'rk/components/button';
import MyModal from 'rk/mymodule/modal';

class MyModule extends Component {
    render() {
        return (
            <div>
                My Module
                <Button label="Open popup" onClick={() => this.props.openPopup('modal1')} />
                <MyModal id="modal1" closePopup={this.props.closePopup}/>
            </div>
        );
    }
}

export default connect(null, popupActions)(MyModule);
