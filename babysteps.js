var sum = 0;
for (var i = 2; i <= process.argv.length-1; i++) {
	sum = sum + parseInt(process.argv[i]);
}
console.log(sum)