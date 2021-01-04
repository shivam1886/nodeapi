
const response = (res,response,code=200) => {

    res.writeHead(code,{
       'content-type':'application/json'
     });
    
    res.end(JSON.stringify(response));
}

exports.response = response;