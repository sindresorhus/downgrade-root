import process from 'node:process';
import test from 'ava';
import defaultUid from 'default-uid';
import downgradeRoot from './index.js';

test('main', t => {
	const _ = process.getuid;
	process.getuid = () => 0;
	downgradeRoot();
	process.getuid = _;

	if ('CI' in process.env || 'GITHUB_ACTIONS' in process.env) {
		t.pass();
	} else {
		t.is(process.getuid(), defaultUid());
	}
});
