'use strict';
var promise = new Promise(function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
}).then(null,onReject);
//	console.log(error.message);


function onReject (error) {
    console.log(error.message);
      //Your solution here
   }




