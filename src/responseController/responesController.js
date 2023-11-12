const errorResponse=(res,{statusCode=500,message=''})=>{
    return res.status(statusCode).json({
        success:false,
        message:message
    })
}

const successRespone=(res,{statusCode=200,message="success",payload={}})=>{
    return res.status(statusCode).json({
        success:true,
        message:message,
        payload:payload
    })
}
module.exports={errorResponse,successRespone}