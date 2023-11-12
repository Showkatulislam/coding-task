const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const xxsClean=require('xss-clean')
const { rateLimit } = require('express-rate-limit');
const userRouter = require("./routers/userRouter");
const seedRoute = require("./routers/seedRoutes");
const { errorResponse } = require("./responseController/responesController");
const travelRouter = require("./routers/travelRoute");
const protectRoutes = require("./helper/protectedRoutes");

const app = express();

app.use(xxsClean())
app.use(morgan("dev"));
app.use(express.json());

const rateLimiter=rateLimit({
    windowMs:1*1000*60,
    limit:5,
    message:"Too my reqest from the api"
})

app.use("/api/users",userRouter)
app.use("/api/seed",seedRoute)
app.use("/api/travels",protectRoutes,travelRouter)


app.get("/test",rateLimiter, (req, res) => {
  res.status(200).json({ message: "I am from test route!" });
});


//client error
app.use((req, res, next) => {
  /*  res.status(404).send('Route is Not Found') */
  next(createError(401, "Route not Found"));
});


//server error
app.use((err, req, res, next) => {
  return errorResponse(res,{statusCode:err.status,message:err.message})
});

module.exports = app;
