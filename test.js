// var arr = [1,2,3,4];

// var ans = arr.map(function(val){
//     return val*4;
// })

// var ans = arr.filter(function(val){
//     if(val > 3){
//         return true;
//     }
//     else return false;
// })

// var ans = arr.find(function(val){
//     if(val === 2) return val;
// })

// console.log(ans);

// const http = require('http');

// const server = http.createServer((req, res)=> {
//     res.end("hello world");
// })

// server.listen(3000, () =>{
//     console.log("server is running on the port")
// });


 const express = require('express');
 const app = express();

 app.use(express.json());
 app.use(express.urlendcoded({ extended: true}));

 app.use(function(req, res, next){
   console.log('middleware chalao');
   next();
 });

 // app.get(route, requestHandler)
 app.get('/', function(req, res){
    res.send("hello world");
 })
 
 app.get('/profile', function(req, res){
    return next(new Error("Not implemented"));
 })

 app.use((err, req, res, next) =>{
   console.log((err.stack))
   res.status(500).send('Something broke');
 })

 app.listen(3000);



