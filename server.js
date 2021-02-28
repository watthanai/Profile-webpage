let http = require('http');
let parse =require('url-parse') ;
let fs = require('fs');
const express = require('express');
const app = express();
// const port = 8000;
 const port = process.env.PORT ||8000



// http.createServer(function(req,res){

//     let q =parse(req.url,true);
//     let filename = "."+q.pathname;

//     console.log(filename);
//     fs.readFile(filename,function(err,data){
//     if (err){     
//     res.writeHead(404,{'Content-Type':'text/html'});
//     return res.end('404 Not Found');

      
//     }
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(data);
//     return res.end();

//    })
// })

app.get('/',(req,res) => {
    res.send('I Love Peach very much')
 
});   


app.listen(port,()=>{
    console.log("Seerver is running...")});