// var p1 = new Promise(function(resolve, reject) {
//     reject("test");
// });


var p1 = Promise.resolve(1);
p1.then(function (resolve) {
    console.log("resolve : " + resolve)

},function (reject) {
    console.log("reject : " + reject)

})