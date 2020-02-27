const PyJsArray = require("../src/index");

test("PyJsArray Exported", () => {
	expect(typeof(PyJsArray)).toBe("function");
});

test("PyJsArray accepts an array in the constructor and behaves in an array like manner", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray[1]).toBe("ball");
});

test("PyJsArray retrieves the last item using -1", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray[-1]).toBe("dog");
});

test("PyJsArray semicolon format returns entire array when no indexes specified", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray[":"]).toStrictEqual([
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	]);
});

test("Checking how slice works 0 - 0", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const check = array.slice(0, 0);

	// assert
	expect(check).toStrictEqual([
	])
});

test("Checking how slice works 0 - 1", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const check = array.slice(0, 1);

	// assert
	expect(check).toStrictEqual([
		"apple",
	])
});

test("Checking how slice works 0 - 2", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const check = array.slice(0, 2);

	// assert
	expect(check).toStrictEqual([
		"apple",
		"ball"
	])
});

test("Checking how slice works", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const check = array.slice(0, 3);

	// assert
	expect(check).toStrictEqual([
		"apple",
		"ball",
		"cat"
	])
});

test("PyJsArray defines start index using '2:'", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray["2:"]).toStrictEqual([
		"cat",
		"dog",
		"elephant",
		"goat"
	]);
});

test("PyJsArray defines end index using ':2'", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray[":2"]).toStrictEqual([
		"apple",
		"ball",
	]);
});

test("PyJsArray accepts start and end index using '2:3'", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray["2:3"]).toStrictEqual([
		"cat",
	]);
});

test("PyJsArray accepts start and end index using negatives '-2:-1'", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);

	// assert
	expect(newArray["-3:-1"]).toStrictEqual([
		"dog",
		"elephant"
	]);
});

test("PyJsArray._array returns a reference to the underlying array'", () => {
	// arrange
	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"goat"
	];

	// act
	const newArray = new PyJsArray(array);
	expect(newArray._array.length).toBe(6);

	newArray._array.push("balloon");

	// assert
	expect(newArray._array.length).toBe(7);
});
