# downgrade-root [![Build Status](https://travis-ci.org/sindresorhus/downgrade-root.svg?branch=master)](https://travis-ci.org/sindresorhus/downgrade-root)

> Try to downgrade the permissions of a process with root privileges

Usually a process started with `sudo`.


## Install

```
$ npm install --save downgrade-root
```


## Usage

```js
var downgradeRoot = require('downgrade-root');

try {
	downgradeRoot();
} catch (err) {
	console.error('Couldn\'t downgrade permissions');
}
```


## Tip

Useful for [trying to downgrade permission](https://github.com/sindresorhus/root-check) before [blocking](https://github.com/sindresorhus/sudo-block) using your app as root.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
