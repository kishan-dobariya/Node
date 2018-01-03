function alwaysThrows() {
	// body...
	throw new Error("OH NOES");
}

function iterate(i){
	console.log(i)
	return i+1;
}


Promise.resolve(1).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
.then(alwaysThrows).catch(reject);//;.done();//.done();
//function rejection(ex){
//	console.log(ex.message)
//}


function reject(err){
	console.log(err.message);
}