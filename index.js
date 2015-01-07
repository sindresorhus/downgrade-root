'use strict';
var isRoot = require('is-root');

module.exports = function () {
	if (isRoot() && process.setuid) {
		process.setuid(501);
	}
};
