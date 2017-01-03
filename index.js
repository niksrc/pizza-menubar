'use strict';

const menubar = require('menubar');

const app = menubar({
	index: 'https://file.pizza',
	width: 575,
	height: 630,
	tooltip: 'File.Pizza',
	icon: './IconTemplate2x.png'
});

app.on('ready', () => console.log('app is ready'));

