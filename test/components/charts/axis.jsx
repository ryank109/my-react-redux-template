import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Axis from 'sbm/components/charts/axis';

const renderer = createRenderer();

describe('components/charts/Axis', function() {
    it('should render the axis', function() {
        const axisDesc = {};
        const offset = { x: 10, y: 5 };
        renderer.render(<Axis axisDesc={axisDesc} className="my-class" offset={offset} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(<g ref="axis" className="sbm-chart__axis my-class" transform="translate(10, 5)" />);
    });

    it('should render the axis label with left orientation', function() {
        const axisDesc = { orient: () => 'left' };
        const offset = { x: 7, y: 8 };
        renderer.render(<Axis
            axisDesc={axisDesc}
            label="My Axis"
            offset={offset}
            range={100}
        />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g ref="axis" className="sbm-chart__axis" transform="translate(7, 8)">
                <text
                    className="sbm-chart__axis__label"
                    textAnchor="middle"
                    transform="rotate(-90)"
                    x={-50}
                    y={-50}
                >
                    My Axis
                </text>
            </g>
        );
    });

    it('should render the axis label with right orientation', function() {
        const axisDesc = { orient: () => 'right' };
        const offset = { x: 7, y: 8 };
        renderer.render(<Axis
            axisDesc={axisDesc}
            label="My Axis"
            offset={offset}
            range={200}
        />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g
                ref="axis"
                className="sbm-chart__axis"
                transform="translate(7, 8)"
            >
                <text
                    className="sbm-chart__axis__label"
                    textAnchor="middle"
                    transform="rotate(90)"
                    x={-100}
                    y={-50}
                >
                    My Axis
                </text>
            </g>
        );
    });

    it('should render the axis label with top orientation', function() {
        const axisDesc = { orient: () => 'top' };
        const offset = { x: 7, y: 8 };
        renderer.render(<Axis
            axisDesc={axisDesc}
            label="My Axis"
            offset={offset}
            range={200}
        />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g
                ref="axis"
                className="sbm-chart__axis"
                transform="translate(7, 8)"
            >
                <text
                    className="sbm-chart__axis__label"
                    textAnchor="middle"
                    transform="rotate(0)"
                    x={-100}
                    y={-50}
                >
                    My Axis
                </text>
            </g>
        );
    });

    it('should render the axis label with bottom orientation', function() {
        const axisDesc = { orient: () => 'bottom' };
        const offset = { x: 7, y: 8 };
        renderer.render(<Axis
            axisDesc={axisDesc}
            label="My Axis"
            offset={offset}
            range={200}
        />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g
                ref="axis"
                className="sbm-chart__axis"
                transform="translate(7, 8)"
            >
                <text
                    className="sbm-chart__axis__label"
                    textAnchor="middle"
                    transform="rotate(0)"
                    x={-100}
                    y={-50}
                >
                    My Axis
                </text>
            </g>
        );
    });

    it('should update the component on axisDesc change', function() {
        const axisDesc = {};
        const offset = { x: 10, y: 5 };
        const axis = new Axis({ axisDesc, offset });
        expect(axis.shouldComponentUpdate({ axisDesc, offset })).toBe(false);
        expect(axis.shouldComponentUpdate({ offset, axisDesc: {} })).toBe(true);
    });

    it('should update the component on className change', function() {
        const className = 'prev-class';
        const offset = { x: 10, y: 5 };
        const axis = new Axis({ className, offset });
        expect(axis.shouldComponentUpdate({ offset, className: 'prev-class' })).toBe(false);
        expect(axis.shouldComponentUpdate({ offset, className: 'new-class' })).toBe(true);
    });

    it('should update the component on label change', function() {
        const label = 'old label';
        const offset = { x: 10, y: 5 };
        const axis = new Axis({ label, offset });
        expect(axis.shouldComponentUpdate({ offset, label: 'old label' })).toBe(false);
        expect(axis.shouldComponentUpdate({ offset, label: 'new label' })).toBe(true);
    });

    it('should update the component on offset change', function() {
        const offset = { x: 10, y: 10 };
        const axis = new Axis({ offset });
        expect(axis.shouldComponentUpdate({ offset: { x: 10, y: 10 } })).toBe(false);
        expect(axis.shouldComponentUpdate({ offset: { x: 10, y: 8 } })).toBe(true);
        expect(axis.shouldComponentUpdate({ offset: { x: 5, y: 10 } })).toBe(true);
    });

    it('should update the component on range change', function() {
        const range = 10;
        const offset = { x: 10, y: 5 };
        const axis = new Axis({ range, offset });
        expect(axis.shouldComponentUpdate({ offset, range: 10 })).toBe(false);
        expect(axis.shouldComponentUpdate({ offset, range: 5 })).toBe(true);
    });
});
