# PyJsArray

Build: [![adamauckland](https://circleci.com/gh/adamauckland/PyJsArray.svg?style=svg)](https://app.circleci.com/github/adamauckland/PyJsArray/pipelines)

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

Great! Create a PyJsArray object, passing the array in:

	const newArray = new PyJsArray(array);

Now let's slice!

	newArray[-1] // returns "dog"

	newArray["-1:"] // returns "dog"

# NOTE! YOU NEED TO QUOTE THE KEY!

Javascript uses `:` so when you want to use `:` QUOTE IT!