# debounce-fn [![Build Status](https://travis-ci.org/sindresorhus/debounce-fn.svg?branch=master)](https://travis-ci.org/sindresorhus/debounce-fn)

> [Debounce](https://davidwalsh.name/javascript-debounce-function) a function

## Install

```
$ npm install debounce-fn
```

## Usage

```js
const debounceFn = require('debounce-fn');

window.onresize = debounceFn(() => {
	// Do something on window resize
}, {wait: 100});
```

## API

### debounceFn(input, options?)

Returns a debounced function that delays calling the `input` function until after `wait` milliseconds have elapsed since the last time the debounced function was called.

It comes with a `.cancel()` method to cancel any scheduled `input` function calls.

#### input

Type: `Function`

Function to debounce.

#### options

Type: `object`

##### wait

Type: `number`\
Default: `0`

Time to wait until the `input` function is called.

##### before

Type: `boolean`\
Default: `false`

Trigger the function on the leading edge of the `wait` interval.

For example, can be useful for preventing accidental double-clicks on a "submit" button from firing a second time.

##### after

Type: `boolean`\
Default: `true`

Trigger the function on the trailing edge of the `wait` interval.

## Related

- [p-debounce](https://github.com/sindresorhus/p-debounce) - Debounce promise-returning & async functions
