function firstChar(text) {
  // your code here
	const arr = text.split("");
	return arr[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
