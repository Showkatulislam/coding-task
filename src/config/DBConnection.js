const mongoose = require('mongoose');
const { monogodb_url } = require('../secrete');

const ConnectionDB=async(options={})=>{
    try {
        await mongoose.connect(monogodb_url,options)
        console.log("Connection is done");
        mongoose.connection.on('error',(error)=>{
            console.error("Db connection is error",error)
        })
    } catch (error) {
        console.log("Coundn't connect database ",error.toString());
    }
}

module.exports=ConnectionDB