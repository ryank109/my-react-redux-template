import { Simulate, renderIntoDocument } from 'react-addons-test-utils';
import renderer from 'react-test-renderer';
import Button from 'rk/components/button';

describe('components/button', function() {
    it('should render the button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(<Button label="MyButton" onClick={onClickHandler} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with class name', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(<Button className="my-class" label="MyButton" onClick={onClickHandler} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with disabled', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(<Button disabled={true} label="MyButton" onClick={onClickHandler} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onClick handler', function(done) {
        const onClickHandler = () => done();
        const component = renderIntoDocument(<Button label="MyButton" onClick={onClickHandler} />);
        Simulate.click(component.refs.button);
    });
});
