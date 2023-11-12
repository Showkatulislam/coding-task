const express = require('express');
const { seedUser } = require('../controllers/seedControllers');

const seedRoute=express.Router()
//api/seed
seedRoute.get('/users',seedUser)

module.exports=seedRoute