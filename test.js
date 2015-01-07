'use strict';
var test = require('ava');
var downgradeRoot = require('./');

test(function (t) {
	var _ = process.getuid;
	var DEFAULT_UID = {
		darwin: 501,
		freebsd: 1000,
		linux: 1000,
		sunos: 100
	};

	process.getuid = function () {
		return 0;
	};

	downgradeRoot();

	process.getuid = _;

	t.assert(process.getuid() === DEFAULT_UID[process.platform]);
	t.end();
});
