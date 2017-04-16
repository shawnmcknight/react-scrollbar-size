import { assert } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import ScrollbarSize from './';

describe('<ScrollbarSize />', () => {
	it('should render with an outer <div>', () => {
		const wrapper = shallow(<ScrollbarSize />);
		assert.strictEqual(wrapper.is('div'), true, 'should be a div');
	});

	it('should mount with a div', () => {
		const wrapper = mount(<ScrollbarSize />);
		assert.strictEqual(wrapper.childAt(0).is('div'), true, 'should be a div');
	});
});
