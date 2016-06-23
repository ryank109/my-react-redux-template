import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Icon from 'rk/components/icon';

describe('components/Icon', function() {
    it('should render with type', function() {
        const renderer = createRenderer();
        renderer.render(<Icon type="ok"/>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('i');
        expect(result.props.className).toBe('fa fa-ok');
    });

    it('should render with class name', function() {
        const renderer = createRenderer();
        renderer.render(<Icon type="cancel" className="my-class"/>);
        const result = renderer.getRenderOutput();

        expect(result.props.className).toBe('fa fa-cancel my-class');
    });

    it('should trigger onClick handler', function(done) {
        const onClickHandler = () => done();
        const component = renderIntoDocument(<Icon type="ok" onClick={onClickHandler}/>);
        Simulate.click(component.refs.icon);
    });
});
