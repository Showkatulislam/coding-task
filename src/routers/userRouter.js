const express = require('express');
const { Verify, userRegister, loginUser } = require('../controllers/usercontroller');

const userRouter=express.Router()





userRouter.post('/register',userRegister)
userRouter.post('/verify',Verify)
userRouter.post('/login',loginUser)


module.exports=userRouter