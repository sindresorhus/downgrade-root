import test from 'ava';
import defaultUid from 'default-uid';
import downgradeRoot from './index.js';

test('main', t => {
	const _ = process.getuid;
	process.getuid = () => 0;
	downgradeRoot();
	process.getuid = _;
	t.is(process.getuid(), process.env.CI ? 1000 : defaultUid());
});
