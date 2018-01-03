'use strict';
var promise = new Promise(function (fulfill, reject) {
  //setTimeout(function () {
    reject('PROMISE VALUE');
}).catch(console.log);
//console.log('MAIN PROGRAM');

var promise2 = Promise.resolve('resolved').then(console.log);
//var promise3 = Promise.reject('rejected').catch(console.log);