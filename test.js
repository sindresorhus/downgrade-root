import test from 'ava';
import defaultUid from 'default-uid';
import m from './';

test(t => {
	const _ = process.getuid;
	process.getuid = () => 0;
	m();
	process.getuid = _;
	t.is(process.getuid(), defaultUid());
});
