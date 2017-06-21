/**
 * Created by myeongsic on 2017. 6. 21..
 */


const request = require('request');


const naver = new Promise((resolve) => {

    request.get("http://www.naver.com",function (err, res, html) {

        resolve(html);
    })

})
const daum = new Promise((resolve) => {

    request.get("http://www.duam.net",function (err, res, html) {

        resolve(html);
    })

})
const google = new Promise((resolve) => {

    request.get("http://www.google.com",function (err, res, html) {

        resolve(html);
    })

})

Promise.all([naver,daum,google]).then(function (values) {
    console.log(values)
    
})