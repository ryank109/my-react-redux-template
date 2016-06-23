import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Button from 'rk/components/button';

describe('components/Button', function() {
    it('should render the button', function() {
        const onClickHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Button label="MyButton" onClick={onClickHandler} />);
        const result = renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <button
                className="sbm-button"
                onClick={onClickHandler}
                ref="button"
                type="button"
            >
                MyButton
            </button>
        );
    });

    it('should render with class name', function() {
        const onClickHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Button className="my-class" label="MyButton" onClick={onClickHandler} />);
        const result = renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <button
                className="sbm-button my-class"
                onClick={onClickHandler}
                ref="button"
                type="button"
            >
                MyButton
            </button>
        );
    });

    it('should trigger onClick handler', function(done) {
        const onClickHandler = () => done();
        const component = renderIntoDocument(<Button label="MyButton" onClick={onClickHandler} />);
        Simulate.click(component.refs.button);
    });
});
