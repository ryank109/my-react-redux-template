import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Watermark from 'sbm/components/charts/watermark';

const renderer = createRenderer();

describe('components/charts/Watermark', function() {
    it('should render the watermark', function() {
        const scale = () => true;
        renderer.render(<Watermark orient="horizontal" scale={scale} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(<line className={undefined} ref="line" />);
    });

    it('should render the watermark with className', function() {
        const scale = () => true;
        renderer.render(<Watermark className="my-class" orient="horizontal" scale={scale} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(<line className="my-class" ref="line" />);
    });
});
