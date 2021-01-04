const http   = require('http');
const url    = require('url');
const router = require('./router');

exports.run = (host,port) => {
     http.createServer((req,res)=>{
            const path = url.parse(req.url).pathname;
            router.route(req,res,path);
          }).listen(port,host,()=>{
            console.log(`Server run on ${host}:${port}`);
          })
}