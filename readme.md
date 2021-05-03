# downgrade-root

> Try to downgrade the permissions of a process with root privileges

Usually applies to a process started with `sudo`.

Windows is gracefully ignored as it lacks a way to [set UID](http://nodejs.org/api/process.html#process_process_setuid_id).

## Install

```
$ npm install downgrade-root
```

## Usage

```js
import downgradeRoot from 'downgrade-root';

try {
	downgradeRoot();
} catch {
	console.error('Couldn\'t downgrade permissions');
}
```

## Tip

Useful for [trying to downgrade permission](https://github.com/sindresorhus/root-check) before [blocking](https://github.com/sindresorhus/sudo-block) using your app as root.
