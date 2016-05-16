import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import Chart from 'sbm/components/charts/chart';

const renderer = createRenderer();

describe('components/charts/Chart', function() {
    it('should render the chart with defaults', function() {
        renderer.render(<Chart height={100} width={200} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <svg ref="svg" className="sbm-chart" height={100} width={200}>
                <defs>
                    <clipPath id="plotAreaClip">
                        <rect height={104} width={204} x={-2} y={-2}/>
                    </clipPath>
                </defs>
                <g transform="translate(0, 0)">
                    <g ref="plotArea" clipPath="url(#plotAreaClip)" />
                </g>
            </svg>
        );
    });

    it('should render the chart with margin', function() {
        const margin = {
            bottom: 1,
            left: 2,
            right: 3,
            top: 4
        };
        renderer.render(<Chart height={100} width={200} margin={margin}/>);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <svg ref="svg" className="sbm-chart" height={100} width={200}>
                <defs>
                    <clipPath id="plotAreaClip">
                        <rect height={99} width={199} x={-2} y={-2}/>
                    </clipPath>
                </defs>
                <g transform="translate(2, 4)">
                    <g ref="plotArea" clipPath="url(#plotAreaClip)" />
                </g>
            </svg>
        );
    });

    it('should render the chart with axes', function() {
        const axes = [ <line key="1" />, <rect key="2" /> ];
        renderer.render(<Chart height={100} width={200} axes={axes} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <svg ref="svg" className="sbm-chart" height={100} width={200}>
                <defs>
                    <clipPath id="plotAreaClip">
                        <rect height={104} width={204} x={-2} y={-2}/>
                    </clipPath>
                </defs>
                <g transform="translate(0, 0)">
                    <line />
                    <rect />
                    <g ref="plotArea" clipPath="url(#plotAreaClip)" />
                </g>
            </svg>
        );
    });

    it('should render the chart with series', function() {
        const series = [ <line key="1" />, <rect key="2" /> ];
        renderer.render(<Chart height={100} width={200} series={series} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <svg ref="svg" className="sbm-chart" height={100} width={200}>
                <defs>
                    <clipPath id="plotAreaClip">
                        <rect height={104} width={204} x={-2} y={-2}/>
                    </clipPath>
                </defs>
                <g transform="translate(0, 0)">
                    <g ref="plotArea" clipPath="url(#plotAreaClip)">
                        <line />
                        <rect />
                    </g>
                </g>
            </svg>
        );
    });

    it('should render the chart with children', function() {
        renderer.render(
            <Chart height={100} width={200}>
                Some child
            </Chart>
        );
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <svg ref="svg" className="sbm-chart" height={100} width={200}>
                <defs>
                    <clipPath id="plotAreaClip">
                        <rect height={104} width={204} x={-2} y={-2}/>
                    </clipPath>
                </defs>
                <g transform="translate(0, 0)">
                    <g ref="plotArea" clipPath="url(#plotAreaClip)" />
                    Some child
                </g>
            </svg>
        );
    });
});
