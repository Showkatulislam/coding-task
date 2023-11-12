const app = require("./app");
const ConnectionDB = require("./config/DBConnection");
const { serverPort } = require("./secrete");


app.listen(serverPort,()=>{
    console.log('Server is running');
    ConnectionDB()
})