// negative indices rule
//
//     pyArray[-1]
function ruleNegativeIndex(array, rule) {
	const negativeIndex = parseInt(rule, 10);

	if (array.length > 0) {
		return array[array.length + negativeIndex];
	}
}

// start and end slice rule
//
//     pyArray["1:3"]
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

	return array.slice(startIndex, endIndex);
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

function PyJsArray(inputArray) {
	// store the array
	this.__array = inputArray;

	// return a new proxy wrapped object
	return new Proxy(this, arrayRulesEngine);
}

module.exports = PyJsArray;