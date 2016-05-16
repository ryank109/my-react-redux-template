import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Focus from 'sbm/components/charts/focus';

const renderer = createRenderer();

describe('components/charts/Focus', function() {
    it('should render the focus', function() {
        renderer.render(<Focus className="my-class" />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g ref="focus" className="my-class sbm-chart__focus sbm-chart__focus--is-hidden" transform="translate(0, 0)">
                <circle className="sbm-chart__focus__bubble" r="10" />
                <circle className="sbm-chart__focus__dot" r="6" />
            </g>
        );
    });

    it('should render the focus with show equal to true', function() {
        renderer.render(<Focus className="my-class" show={true} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g ref="focus" className="my-class sbm-chart__focus" transform="translate(0, 0)">
                <circle className="sbm-chart__focus__bubble" r="10" />
                <circle className="sbm-chart__focus__dot" r="6" />
            </g>
        );
    });

    it('should render the focus with x,y coordinates', function() {
        renderer.render(<Focus className="my-class" x={10} y={5} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <g ref="focus" className="my-class sbm-chart__focus sbm-chart__focus--is-hidden" transform="translate(10, 5)">
                <circle className="sbm-chart__focus__bubble" r="10" />
                <circle className="sbm-chart__focus__dot" r="6" />
            </g>
        );
    });
});
