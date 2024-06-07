'use strict';
const mimicFn = require('mimic-fn');

module.exports = (inputFunction, options = {}) => {
	if (typeof inputFunction !== 'function') {
		throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
	}

	const {
		wait = 0,
		before = false,
		after = true
	} = options;

	if (!before && !after) {
		throw new Error('Both `before` and `after` are false, function wouldn\'t be called.');
	}

	let timeout;
	let result;

	const debouncedFunction = function (...arguments_) {
		const context = this;

		const later = () => {
			timeout = undefined;

			if (after) {
				result = inputFunction.apply(context, arguments_);
			}
		};

		const shouldCallNow = before && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (shouldCallNow) {
			result = inputFunction.apply(context, arguments_);
		}

		return result;
	};

	mimicFn(debouncedFunction, inputFunction);

	debouncedFunction.cancel = () => {
		if (timeout) {
			clearTimeout(timeout);
			timeout = undefined;
		}
	};

	return debouncedFunction;
};
