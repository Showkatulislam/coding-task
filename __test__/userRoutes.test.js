const request = require("supertest");
const app = require("../src/app");
const createJwtToken = require("../src/helper/jsonwebToken");
const ConnectionDB = require("../src/config/DBConnection");
const  mongoose = require("mongoose");

const userId = new mongoose.Types.ObjectId().toString();

const user={
  name:'showkatul islam',
  email:'showkatul18@gmail.com',
  password:'123456',
}

describe("user",()=>{
  describe("Create user Route",()=>{
     it("Should return a 403",async()=>{
      const {statusCode}=await request(app)
      .post("api/user/register")
      expect(statusCode).toBe(403)
     })
  })
  describe("logged user Route",()=>{
     it("Should return a 403",async()=>{
      const {statusCode}=await request(app)
      .post("api/user/login")
      expect(statusCode).toBe(403)
     })
  })
})