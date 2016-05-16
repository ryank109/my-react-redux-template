import _ from 'lodash';
import { Component, PropTypes } from 'react';
import { Popup } from 'react-redux-popup';
import MenuItem from 'rk/components/popup-menu-item';

class PopupMenu extends Component {
    render() {
        return <div className="sbm-popup-menu">{this.renderMenuItems()}</div>;
    }

    renderMenuItems() {
        return _.map(this.props.menuItems, item => {
            return <MenuItem {...item} />;
        });
    }
}

PopupMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        popOut: PropTypes.boolean
    })).isRequired
};


export default Popup(PopupMenu);
