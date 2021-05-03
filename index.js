import isRoot from 'is-root';
import defaultUid from 'default-uid';

export default function downgradeRoot() {
	if (!isRoot()) {
		return;
	}

	// `setgid`` needs to happen before setuid to avoid EPERM.
	if (process.setgid) {
		const gid = Number.parseInt(process.env.SUDO_GID, 10);
		if (gid && gid > 0) {
			process.setgid(gid);
		}
	}

	if (process.setuid) {
		const uid = Number.parseInt(process.env.SUDO_UID, 10) || defaultUid();
		if (uid && uid > 0) {
			process.setuid(uid);
		}
	}
}
