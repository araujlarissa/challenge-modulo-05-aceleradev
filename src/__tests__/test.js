import React from 'react';
import {render} from '@testing-library/react'; /* fireEvent, screen */

import Contact from '../components/Contact';

const mockUserData = {
	avatar: '',
	name: '',
	phone: '',
	country: '',
	admissionDate: '',
	company: '',
	department: '',
};

describe('Contacts', () => {
	it('Should render Contact', () => {
		const { fragment } = render(<Contact data={mockUserData}/>);

		expect(fragment).toMatchSnapshot();
    });
}
);