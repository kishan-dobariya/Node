var fs = require('fs');
//var str;	
fs.readFile(process.argv[2] , 'utf8', function (err,data) {
	// body...
	//if(!err){
		//console.log("1");
		///if(err){
			//console.log(err);
		//}
		//console.log(data);
		 console.log(data.split('\n').length-1);
	//}
});
//console.log(str);
//var arr = str.split('\n');
//console.log(arr.length-1);