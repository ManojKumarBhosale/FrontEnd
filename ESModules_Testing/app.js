import {add} from './math.js'
import {sub} from './math.js'
import {mul} from './math.js'

document.getElementById("addButton").addEventListener("click", () => {
	let result = add(document.getElementById("first").value, document.getElementById("second").value);
	document.getElementById("result").value = result;
});

document.getElementById("subButton").addEventListener("click", () => {
	let result = add(document.getElementById("first").value, document.getElementById("second").value);
	document.getElementById("result").value = result;
});

document.getElementById("mulButton").addEventListener("click", () => {
	let result = add(document.getElementById("first").value, document.getElementById("second").value);
	document.getElementById("result").value = result;
});