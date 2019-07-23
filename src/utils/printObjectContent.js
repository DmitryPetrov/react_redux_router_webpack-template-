function printObjectContent(obj, offset = "") {
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			console.log(offset + "#" + obj[key] + "#");
			printObjectContent(obj[key], (offset + "--->"));
		} else {
			console.log(offset + key + " = [" + obj[key] + "]");  
		}
	}
}

export default printObjectContent;
