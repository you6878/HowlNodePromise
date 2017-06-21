/**
 * Created by myeongsic on 2017. 6. 21..
 */
var p1 = new Promise(function(resolve, reject) {
    resolve('Success');
});

p1.then(function(value) {
    console.log(value); // "Success!"
    throw 'oh, no!';
}).catch(function(e) {
    console.log(e); // "oh, no!"
    throw "catch error"
}).then(
    function(){
    console.log('after a catch the chain is restored');
}, function (ee) {
    console.log(ee);
});