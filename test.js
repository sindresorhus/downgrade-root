'use strict';
var test = require('ava');
var downgradeRoot = require('./');

test(function (t) {
	var _ = process.getuid;

	process.getuid = function () {
		return 0;
	};

	downgradeRoot();

	process.getuid = _;

	t.assert(process.getuid() === 501);
	t.end();
});
