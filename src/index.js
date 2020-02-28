/**
 * negative indices rule
 *
 * @param {*} array
 * @param {*} rule
 * @returns array
 */
function ruleNegativeIndex(array, rule) {
	const negativeIndex = parseInt(rule, 10);

	if (array.length > 0) {
		return array[array.length + negativeIndex];
	}
}

/**
 * stepSlice. Converts an array into a stepped array
 *
 * @param {*} array
 * @param {*} step
 */
function stepSlice(startIndex, endIndex, array, step) {
	let index = startIndex;
	let result = [];

	while (true) {
		result.push(array[index]);

		index += step;

		if (step > 0) {
			if (index >= endIndex) {
				break;
			}
		}

		if (step < 0) {
			if (index <= endIndex) {
				break;
			}
		}
	}

	return result;
}

/**
 * start and end slice rule
 *
 * @param {*} array
 * @param {*} rule
 * @returns array
 */
function ruleSplitSlice(array, rule) {
	const pieces = rule.split(":");

	let startIndex = 0;
	let endIndex = array.length;

	// left side of :
	if (pieces[0] !== "") {
		startIndex = parseInt(pieces[0], 10);
	}

	// right side of :
	if (pieces[1] !== "") {
		endIndex = parseInt(pieces[1], 10);
	}

	let slice;

	// if we have a step parameter
	if (pieces.length === 3) {
		step = parseInt(pieces[2], 10);

		slice = stepSlice(startIndex, endIndex, array, step);
	} else {
		slice = array.slice(startIndex, endIndex);
	}

	return slice;
}

const arrayRulesEngine = {
	get: (target, name) => {
		// allow _array to pass a reference to the original array.
		if (name === "_array") {
			return target.__array;
		}

		const array = target.__array;

		// rules need to be in order of priority.
		if ((name.indexOf) && (name.indexOf(":") !== -1)) {
			return ruleSplitSlice(array, name);
		}

		// if this rule is first, it will catch -2:-1 and return just one item
		if ((name.startsWith) && (name.startsWith("-"))) {
			return ruleNegativeIndex(array, name);
		}

		return target.__array[name];
	}
}

/**
 * PyJsArray object for Python-like list-access
 *
 * @param {*} inputArray
 * @returns PyJsArray
 */
function PyJsArray(inputArray) {
	// store the array in a pseudo-private place
	this.__array = inputArray;

	// return a new proxy wrapped object
	return new Proxy(this, arrayRulesEngine);
}

module.exports = PyJsArray;