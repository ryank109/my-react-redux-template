import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Input from 'sbm/components/input';

describe('components/Input', function() {
    const renderer = createRenderer();

    it('should render the input', function() {
        renderer.render(<Input />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('input');
        expect(result.props.className).toBe('sbm-input');
        expect(result.props.type).toBe('text');
    });

    it('should render the input with className', function() {
        renderer.render(<Input className="my-class-name" />);
        const result = renderer.getRenderOutput();

        expect(result.props.className).toBe('sbm-input my-class-name');
    });

    it('should render the input with value', function() {
        renderer.render(<Input value="myValue" />);
        const result = renderer.getRenderOutput();

        expect(result.props.value).toBe('myValue');
    });

    it('should render the input with some property', function() {
        renderer.render(<Input someProperty="myProp" />);
        const result = renderer.getRenderOutput();

        expect(result.props.someProperty).toBe('myProp');
    });

    it('should render the input with error', function() {
        const onChange = () => true;
        renderer.render(<Input error="Some error" />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <input
                className="sbm-input sbm-input--error"
                error="Some error"
                onChange={onChange}
                ref="input"
                type="text"
            />
        );
    })

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('newValue');
            done();
        };

        const component = renderIntoDocument(<Input onChange={onChangeHandler} />);
        Simulate.change(component.refs.input, {
            target: { value: 'newValue' }
        });
    });
});
