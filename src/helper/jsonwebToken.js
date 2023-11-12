const jwt = require("jsonwebtoken");
const { privateKey } = require("../secrete");
const createJwtToken = (user) => {

  if (typeof user !== "object") {
    throw new Error("User must be object");
  }
  try {
    const token = jwt.sign(user, privateKey, {
      algorithm: "HS512",
      expiresIn: "10m",
    });
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = createJwtToken;
