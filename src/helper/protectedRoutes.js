const jwt=require('jsonwebtoken');
const { privateKey } = require('../secrete');
const createHttpError = require('http-errors');

const protectRoutes=async(req,res,next)=>{
    try {
        const token=req.headers.token;
        const decoded=await jwt.verify(token, privateKey);
        if(!decoded){
            return createHttpError("404","Unauthorized User")
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports=protectRoutes