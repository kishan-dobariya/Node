var FS = require("q-io/http");
FS.read("http://localhost:1337")
.then(function (json) {
    // ...
    console.log(JSON.parse(json));
}).then(null,console.error).done();	
//console.log(buf)






