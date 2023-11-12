const users = require("../data")
const User = require("../models/userModel")

const seedUser=async(req,res,next)=>{
    try {
        await User.deleteMany({})

        const alluser =await User.insertMany(users)

        return res.status(200).json({users:alluser})
    } catch (error) {
        next(error)
    }
}

module.exports={seedUser}