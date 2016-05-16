import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Line from 'sbm/components/charts/line';

const renderer = createRenderer();

describe('components/charts/Line', function() {
    it('should render the focus', function() {
        const data = [];
        const lineDesc = {};
        renderer.render(<Line className="my-class" data={data} lineDesc={lineDesc} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(<path ref="line" className="my-class" />);
    });

    it('should normalize data', function() {
        let data = [ 'a', 'b', 'c' ];
        const line = new Line();
        let result = line.normalizeData(data);
        expect(result).toEqual([ 'a', 'b', 'c' ]);

        data = [ [ 'a' ], [ 'b', 'c' ] ];
        result = line.normalizeData(data);
        expect(result).toEqual([ 'a', null, 'b', 'c', null ]);
    });

    it('should update on className change', function() {
        const className = 'prev-class';
        const line = new Line({ className });
        expect(line.shouldComponentUpdate({ className: 'prev-class' })).toBe(false);
        expect(line.shouldComponentUpdate({ className: 'new-class' })).toBe(true);
    });

    it('should update on lineDesc change', function() {
        const lineDesc = {};
        const line = new Line({ lineDesc });
        expect(line.shouldComponentUpdate({ lineDesc })).toBe(false);
        expect(line.shouldComponentUpdate({ lineDesc: {} })).toBe(true);
    });

    it('should update on data change', function() {
        const data = [];
        const line = new Line({ data });
        expect(line.shouldComponentUpdate({ data })).toBe(false);
        expect(line.shouldComponentUpdate({ data: [ 'a' ] })).toBe(true);
    });
});
