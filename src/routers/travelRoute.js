const express = require('express');
const { addTravel, findByTravelId, deleteTravel, updateTravel, getAllTravel } = require('../controllers/travelsController');

const travelRouter=express.Router()




travelRouter.get("/",getAllTravel)
travelRouter.post('/add-travel',addTravel)
travelRouter.get('/:id',findByTravelId)
travelRouter.delete('/:id',deleteTravel)
travelRouter.patch("/update/:id",updateTravel)




module.exports=travelRouter