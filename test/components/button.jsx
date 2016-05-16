import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Button from 'sbm/components/button';

describe('components/Button', function() {
    it('should render the button', function() {
        const onClickHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Button label="MyButton" onClick={onClickHandler} />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('button');
        expect(result.props.className).toBe('sbm-button');
        expect(result.props.onClick).toBe(onClickHandler);
        expect(result.props.type).toBe('button');
        expect(result.props.children).toBe('MyButton');
    });

    it('should render with class name', function() {
        const onClickHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Button className="my-class" label="MyButton" onClick={onClickHandler} />);
        const result = renderer.getRenderOutput();

        expect(result.props.className).toBe('sbm-button my-class');
    });

    it('should trigger onClick handler', function(done) {
        const onClickHandler = () => done();
        const component = renderIntoDocument(<Button label="MyButton" onClick={onClickHandler} />);
        Simulate.click(component.refs.button);
    });
});
