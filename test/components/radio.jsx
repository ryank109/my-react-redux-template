import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Radio from 'sbm/components/radio';

describe('components/Radio', function() {
    it('should render the radio', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Radio name="radio1" value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox">
                <input
                    checked={false}
                    name="radio1"
                    onChange={onChangeHandler}
                    ref="radio"
                    type="radio"
                    value="checkBox1"
                />
            </label>
        );
    });

    it('should render the radio with class name', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Radio className="my-class-name" name="radio1" value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox my-class-name">
                <input
                    checked={false}
                    name="radio1"
                    onChange={onChangeHandler}
                    ref="radio"
                    type="radio"
                    value="checkBox1"
                />
            </label>
        );
    });

    it('should render the radio with label', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Radio label="myLabel" name="radio1" value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox">
                <input
                    checked={false}
                    name="radio1"
                    onChange={onChangeHandler}
                    ref="radio"
                    type="radio"
                    value="checkBox1"
                />
                myLabel
            </label>
        );
    });

    it('should render the radio with checked flag', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<Radio isChecked={true} name="radio1" value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox">
                <input
                    checked={true}
                    name="radio1"
                    onChange={onChangeHandler}
                    ref="radio"
                    type="radio"
                    value="checkBox1"
                />
            </label>
        );
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('radio1');
            done();
        };

        const component = renderIntoDocument(<Radio name="radio1" value="checkBox1" onChange={onChangeHandler} />);
        Simulate.change(component.refs.radio, {
            target: { value: 'radio1' }
        });
    });
});
