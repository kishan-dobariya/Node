var promise = new Promise(function(fulfill,reject){



	fulfill("I FIRED");
	//reject(new Error("I DID NOT FIRE"));


}).then(function(result){

	return first(result).then(function(result){ return second(result)});
}).then(console.log);
