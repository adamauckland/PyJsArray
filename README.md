# PyJsArray

Build: [![adamauckland](https://circleci.com/gh/adamauckland/PyJsArray.svg?style=svg)](https://app.circleci.com/github/adamauckland/PyJsArray/pipelines)

[View all the tests](https://github.com/adamauckland/PyJsArray/blob/master/__tests__/pyjsarray.test.js)

[View on GitHub](https://github.com/adamauckland/PyJsArray)

Do you love Python list slicing?

Want to do this..

    items = ["apple", "ball", "cat"]

	items[-1:] # returns ["cat]

	items[-1] # returns "cat"

	items[:1] # returns ["apple"]

Then this module is for you!

# Usage

Create an array:

	const array = [
		"apple",
		"ball",
		"cat",
		"dog"
	];


Create a PyJsArray object, passing your array in:

	const newArray = new PyJsArray(array);


Accessing from the end backwards:

	newArray[-1] // returns "dog"
	
	
PyJsArray also accepts the start:end format, _which must be quoted or JS will think it's an object_

	newArray["-2:"] // returns ["cat", "dog"]
	

## Stepped slicing

Stepped slicing. A third "step" parameter can be passed in to return every 2nd, 3rd or nth item. It also works in reverse.

	const array = [
		"apple",
		"ball",
		"cat",
		"dog",
		"elephant",
		"fish"
	];

	newArray["1:5:2"] // returns ["ball", "dog" ]

When reversing, start index must be higher than end index.

	newArray["5:1:-2"]

* END INDEXES ARE NON-INCLUSIVE. *

In the above example, we do not get "fish" returned because "fish" is at index[5] and as 5 is our end index (non-inclusive), it gets ommitted.

That's how it works in Python.


Javascript uses `:` so when you want to use `:` QUOTE IT! sorry.
