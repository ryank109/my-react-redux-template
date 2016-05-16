import { Component, PropTypes } from 'react';

export default class PopupMenuItem extends Component {
    render() {
        const target = this.props.popOut ? '_blank' : '_self';
        return <a className="sbm-popup-menu-item" href={this.props.url} target={target}>{this.props.label}</a>;
    }
}

PopupMenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    popOut: PropTypes.bool.isRequired,
    url: PropTypes.string
};

PopupMenuItem.defaultProps = {
    popOut: false
};
