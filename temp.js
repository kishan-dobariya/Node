var log = "";
 
function doWork() {
    log += "W";
    return Promise.resolve();
}
 
function doError() {
    log += "E";
    throw new Error("oops!");
}
 
function errorHandler(error) {
    log += "H";
}

doWork()
    .then(doWork)
    .then(doError)
    .then(doWork) // this will be skipped
    //.then(doWork, errorHandler)
    .then(verify)//.done();
    function verify() {
    console.log(log);
    
}







function getHotDog () {
    return getBun().then(function (bun) {
        return addSausage(bun)
    }).then(function (bunWithSausage) {
        return addSauce(bunWithSausage)
    }).then(function (hotdog) {
        return hotdog
    })
}