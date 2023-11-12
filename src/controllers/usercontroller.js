const createHttpError = require("http-errors");
const {
  successRespone,
  errorResponse,
} = require("../responseController/responesController");
const User = require("../models/userModel");
const createJwtToken = require("../helper/jsonwebToken");
const sendEmailByNodeMailer = require("../helper/email");
const jwt = require("jsonwebtoken");
const { privateKey } = require("../secrete");
const { hashPassword } = require("../helper/auth");
const userRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.exists({ email });

    if (user) {
      throw createHttpError(409, "User Already exist");
    }
    const hPassword = await hashPassword(password);
    const newUser = {
      name,
      email,
      password: hPassword,
    };
    const token = createJwtToken(newUser);

    const emailData = {
      email,
      subject: "Account Activation EMail",
      html: `
            <h2>Hello ${name}</h2>
            <p>Please click here to <a href="http://localhost:5000/api/users/verify?token=${token}"> click</a></p>
            `,
    };

    try {
      sendEmailByNodeMailer(emailData);
    } catch (error) {
      next(createHttpError(504, "Email verification Fail"));
    }

    return successRespone(res, {
      statusCode: 200,
      message: `Please go to your email: ${email} for completeting your registration process`,
    });
  } catch (error) {
    next(error);
  }
};

const Verify = async (req, res, next) => {
  try {
    const token = req.query.token;
    if (!token) {
      throw createHttpError(504, "Token not found");
    }
    const decoded = jwt.verify(token, privateKey);
    console.log("veryif", decoded);
    const newUser = await User.create(decoded);

    if (!newUser) {
      return res.status(400).send({
        message: "user was not created",
      });
    }

    return successRespone(res, {
      statusCode: 200,
      message: "user was created successfully ! Please signin",
    });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({
        error: "email is required",
      });
    }

    if (!password || password.length < 6) {
      return errorResponse(res, {
        statusCode: 403,
        message: "Password must be atleast 6 characters",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return errorResponse(res, {
        statusCode: 403,
        message: '"user does not exist with this email. please register first"',
      });
    }

    const user = {
      name: existingUser.name,
      email: existingUser.email,
    };
    // create signed jwt
    const token = createJwtToken(user);
    console.log(token);
    return successRespone(res, {
      statusCode: 200,
      message: "SingIn successfully",
      payload: {
        user:user,
        token
      },
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  Verify,
  loginUser,
};
