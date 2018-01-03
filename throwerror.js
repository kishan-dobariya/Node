function parsePromised(arg2){
		Promise.resolve().then(function(){
			try{
				JSON.parse(arg2);
			}
			catch(err){
				console.log(err.message)
			}
		});//.then(null,console.log);
}

parsePromised(process.argv[2]);



