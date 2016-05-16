import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import FormItem from 'sbm/components/form-item';
import Icon from 'sbm/components/icon';

describe('components/FormItem', function() {
    const renderer = createRenderer();

    it('should render the form item with defaults', function() {
        renderer.render(<FormItem />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item">
                    <label className="sbm-form-item__label"></label>
                    <div className="sbm-form-item__no-required-icon"/>
                </div>
            </div>
        );
    });

    it('should render the form item with class name', function() {
        renderer.render(<FormItem className="my-class-name" />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item my-class-name">
                    <label className="sbm-form-item__label"></label>
                    <div className="sbm-form-item__no-required-icon"/>
                </div>
            </div>
        );
    });

    it('should render the form item with label', function() {
        renderer.render(<FormItem label="myLabel" />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item">
                    <label className="sbm-form-item__label">myLabel</label>
                    <div className="sbm-form-item__no-required-icon"/>
                </div>
            </div>
        );
    });

    it('should render the form item with isRequired', function() {
        renderer.render(<FormItem isRequired={true} />);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item">
                    <label className="sbm-form-item__label"></label>
                    <Icon className="sbm-form-item__required-icon" type="asterisk" />
                </div>
            </div>
        );
    });

    it('should render the form item with children', function() {
        renderer.render(<FormItem>SomeChild</FormItem>);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item">
                    <label className="sbm-form-item__label"></label>
                    <div className="sbm-form-item__no-required-icon"/>
                    SomeChild
                </div>
            </div>
        );
    });

    it('should render the form item with error', function() {
        renderer.render(<FormItem className="my-class" error="someError">SomeChild</FormItem>);
        const result = renderer.getRenderOutput();
        expect(result).toEqualJSX(
            <div>
                <div className="sbm-form-item sbm-form-item--error my-class">
                    <label className="sbm-form-item__label"></label>
                    <div className="sbm-form-item__no-required-icon"/>
                    SomeChild
                </div>
                <div className="sbm-form-item__error my-class">
                    <label className="sbm-form-item__label"></label>
                    <div className="sbm-form-item__no-required-icon"/>
                    <div>someError</div>
                </div>
            </div>
        );
    });
});
