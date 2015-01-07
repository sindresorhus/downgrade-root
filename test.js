'use strict';
var test = require('ava');
var defaultUid = require('default-uid');
var downgradeRoot = require('./');

test(function (t) {
	var _ = process.getuid;

	process.getuid = function () {
		return 0;
	};

	downgradeRoot();

	process.getuid = _;

	t.assert(process.getuid() === defaultUid());
	t.end();
});
