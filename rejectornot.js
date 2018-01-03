'use strict';
var promise = new Promise(function (fulfill, reject) {
  //setTimeout(function () {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
  //}, 300);
}).then(console.log,onReject);
//	console.log(error.message);


function onReject (error) {
    console.log(error.message);
      //Your solution here
   }