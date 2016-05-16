import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Icon from 'sbm/components/icon';
import MessageBar from 'sbm/components/message-bar';

describe('components/MessageBar', function() {
    it('should render the message bar', function() {
        const renderer = createRenderer();
        renderer.render(<MessageBar message="myMessage" />);
        expect(renderer.getRenderOutput()).toEqualJSX(
            <div className="sbm-message-bar sbm-message-bar--info">
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{ __html: 'myMessage' }} />
            </div>
        );
    });

    it('should render the message bar with className', function() {
        const renderer = createRenderer();
        renderer.render(<MessageBar message="myMessage" className="my-class-name" />);
        expect(renderer.getRenderOutput()).toEqualJSX(
            <div className="sbm-message-bar sbm-message-bar--info my-class-name">
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{ __html: 'myMessage' }} />
            </div>
        );
    });

    it('should render the message bar with show icon and type', function() {
        const renderer = createRenderer();
        renderer.render(<MessageBar message="myMessage" showIcon={true} type="info"/>);
        expect(renderer.getRenderOutput()).toEqualJSX(
            <div className="sbm-message-bar sbm-message-bar--info">
                <Icon className="sbm-message-bar__icon" type="info-circle" />
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{ __html: 'myMessage' }} />
            </div>
        );

        renderer.render(<MessageBar message="myMessage" showIcon={true} type="warning"/>);
        expect(renderer.getRenderOutput()).toEqualJSX(
            <div className="sbm-message-bar sbm-message-bar--warning">
                <Icon className="sbm-message-bar__icon" type="exclamation-triangle" />
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{ __html: 'myMessage' }} />
            </div>
        );

        renderer.render(<MessageBar message="myMessage" showIcon={true} type="error"/>);
        expect(renderer.getRenderOutput()).toEqualJSX(
            <div className="sbm-message-bar sbm-message-bar--error">
                <Icon className="sbm-message-bar__icon" type="exclamation-triangle" />
                <span className="sbm-message-bar__message" dangerouslySetInnerHTML={{ __html: 'myMessage' }} />
            </div>
        );
    });
});
