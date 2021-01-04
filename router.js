
const response = require('./response');

const route = (req,res,path) => {

    if(path == '/api/get/posts'){
        response.response(res,{
            'status'  : true,
            'message' : 'Record found',
            'data'    : []
        });
    }else{
        response.response(res,{
            'status'  : false,
            'message' : 'Route not found'
        },404);
    }
}
exports.route = route;
