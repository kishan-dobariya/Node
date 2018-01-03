'use strict';
var promise = new Promise(function (fulfill, reject) {
  //setTimeout(function () {
    fulfill('PROMISE VALUE');
}).then(console.log);
console.log('MAIN PROGRAM');