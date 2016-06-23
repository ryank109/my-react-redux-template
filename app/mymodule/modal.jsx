import { Component } from 'react';
import Button from 'rk/components/button';
import Modal from 'rk/components/modal';

class MyModal extends Component {
    render() {
        return (
            <div>
                <div>Some content</div>
                <Button label="Close" onClick={this.props.closePopup} />
            </div>
        );
    }
}

export default Modal(MyModal);
