import expect from 'expect';
import { createRenderer, Simulate, renderIntoDocument } from 'react-addons-test-utils';
import Select from 'sbm/components/select';

describe('components/Select', function() {
    it('should render the select', function() {
        const onChangeHandler = () => true;
        const options = [
            { label: 'Banana', value: 'ba' },
            { label: 'Apple', value: 'ap' },
            { label: 'Peach', value: 'pe' }
        ];

        const renderer = createRenderer();
        renderer.render(<Select onChange={onChangeHandler} options={options} />);
        const result = renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <select className="sbm-select" onChange={onChangeHandler} ref="select" value={undefined}>
                <option key="ba" value="ba">Banana</option>
                <option key="ap" value="ap">Apple</option>
                <option key="pe" value="pe">Peach</option>
            </select>
        );
    });

    it('should render the select with class name', function() {
        const onChangeHandler = () => true;
        const options = [
            { label: 'Banana', value: 'ba' },
            { label: 'Apple', value: 'ap' },
            { label: 'Peach', value: 'pe' }
        ];

        const renderer = createRenderer();
        renderer.render(<Select className="my-class" onChange={onChangeHandler} options={options} />);
        const result = renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <select className="sbm-select my-class" onChange={onChangeHandler} ref="select" value={undefined}>
                <option key="ba" value="ba">Banana</option>
                <option key="ap" value="ap">Apple</option>
                <option key="pe" value="pe">Peach</option>
            </select>
        );
    });

    it('should render the select with value', function() {
        const onChangeHandler = () => true;
        const options = [
            { label: 'Banana', value: 'ba' },
            { label: 'Apple', value: 'ap' },
            { label: 'Peach', value: 'pe' }
        ];
        const value = 'ap';

        const renderer = createRenderer();
        renderer.render(<Select onChange={onChangeHandler} options={options} value={value} />);
        const result = renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <select className="sbm-select" onChange={onChangeHandler} ref="select" value="ap">
                <option key="ba" value="ba">Banana</option>
                <option key="ap" value="ap">Apple</option>
                <option key="pe" value="pe">Peach</option>
            </select>
        );
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('pe');
            done();
        };
        const options = [
            { label: 'Banana', value: 'ba' },
            { label: 'Apple', value: 'ap' },
            { label: 'Peach', value: 'pe' }
        ];
        const component = renderIntoDocument(<Select onChange={onChangeHandler} options={options} />);
        Simulate.change(component.refs.select, {
            target: { value: 'pe' }
        });
    });
});
