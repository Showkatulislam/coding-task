const fs = require('fs');
const deleteImage=async(url)=>{
    try {
       await fs.access(userImagePath)
       await fs.unlink(userImagePath)
       console.log("user Image is delete")
    } catch (error) {
        console.log("user is Not delete")
    }
    
}

module.exports=deleteImage