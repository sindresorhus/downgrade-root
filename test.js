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

test(t => {
	const _ = process.getgid;
	process.getgid = () => 0;
	m();
	process.getgid = _;
	t.true(process.getgid() > 0);
});
