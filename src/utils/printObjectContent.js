function printObjContent(obj, offset = "") {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      console.log(offset + "#" + obj[key] + "#");
      printObjContent(obj[key], (offset + "--->"));
    } else {
      console.log(offset + key + " = [" + obj[key] + "]");  
    }
  }
}

export default printObjContent;
