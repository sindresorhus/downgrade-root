'use strict';
var isRoot = require('is-root');
var DEFAULT_UID = {
	darwin: 501,
	freebsd: 1000,
	linux: 1000,
	sunos: 100
};

module.exports = function () {
	if (isRoot() && process.setuid) {
		var uid = parseInt(process.env.SUDO_UID, 10) || DEFAULT_UID[process.platform];
		if (uid && uid > 0) {
			process.setuid(uid);
		}
	}
};
