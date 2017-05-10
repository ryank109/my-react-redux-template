import { shallow } from 'enzyme';
import { Home } from 'app/home';

describe('home/index', function() {
    it('should render the home component', function() {
        const handler = () => true;
        const tree = shallow(
            <Home closePopup={handler} openPopup={handler} />
        );
        expect(tree).toMatchSnapshot();
    });
});
