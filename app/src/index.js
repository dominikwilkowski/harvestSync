import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/core';
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';

ReactDOM.render(
	<React.StrictMode>
		<Global
			styles={{
				html: {
					background:
						'rgb(183, 1, 255) -webkit-radial-gradient(left bottom, rgb(1, 255, 251), rgb(183, 1, 255)) repeat fixed 0% 0%',
					height: '100%',

					// background: #B2E2B8;
					// background: -webkit-radial-gradient(bottom left, #B2E2B8, #CDDDA2);
					// background: -moz-radial-gradient(bottom left, #B2E2B8, #CDDDA2);
					// background: radial-gradient(to top right, #B2E2B8, #CDDDA2);
				},
				body: {
					fontFamily:
						'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					lineHeight: 1.2,
					margin: 0,
					padding: 0,
					color: '#383E48',
				},
				a: {
					color: '#383E48',
				},
				'*, *:before, *:after': {
					boxSizing: 'border-box',
				},
			}}
		/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
