'use strict';

function color() {
	return 'red';
}

module.exports = {
	'div': {
		'color': color,
		margin: 100,
		background: ['jalla', 'moz-jalla', 'ie-jalla'],
		'.header': {
			'font-size': '12px',
			'&.big': {
				fontSize: '14px'
			}
		}
	}
};