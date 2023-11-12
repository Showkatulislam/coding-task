const bcrypt = require('bcrypt');
 const hashPassword = async(password) => {
    console.log(password);
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password.toString(), salt);

  };
 const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  };

module.exports={hashPassword,comparePassword}