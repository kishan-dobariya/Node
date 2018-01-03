var fs = require('fs');
var filestring = fs.readFileSync(process.argv[2]).toString();
//console.log(filestring);
var arr = filestring.split('\n');
console.log(arr.length-1);