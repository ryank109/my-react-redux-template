import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import CheckBox from 'sbm/components/check-box';

describe('components/CheckBox', function() {
    it('should render the check box', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<CheckBox value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox">
                <input
                    checked={false}
                    onChange={onChangeHandler}
                    ref="checkBox"
                    type="checkbox"
                    value="checkBox1"
                />
            </label>
        );
    });

    it('should render the check box with class name', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<CheckBox className="my-class" value="checkBox1" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox my-class">
                <input
                    checked={false}
                    onChange={onChangeHandler}
                    ref="checkBox"
                    type="checkbox"
                    value="checkBox1"
                />
            </label>
        );
    });

    it('should render the check box with label', function() {
        const onChangeHandler = () => true;
        const renderer = createRenderer();
        renderer.render(<CheckBox value="checkBox1" label="MyLabel" onChange={onChangeHandler} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <label className="sbm-checkbox">
                <input
                    checked={false}
                    onChange={onChangeHandler}
                    ref="checkBox"
                    type="checkbox"
                    value="checkBox1"
                />
                MyLabel
            </label>
        );
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('checkBox1');
            done();
        };

        const component = renderIntoDocument(<CheckBox value="checkBox1" onChange={onChangeHandler} />);
        Simulate.change(component.refs.checkBox, {
            target: { value: 'checkBox1' }
        });
    });
});
