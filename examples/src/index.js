import React from 'react';
import { render } from 'react-dom';

import normalize from 'normalize.css'; // eslint-disable-line no-unused-vars
import main from './www/css/main.css'; // eslint-disable-line no-unused-vars

import app from './app';

if (process.env.NODE_ENV === 'development') {
	// attach react dev tools to window
	if (typeof window !== 'undefined') {
		window.React = React;
	}
}

render(app, document.querySelector('#main'));
