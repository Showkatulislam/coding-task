const Travel = require("../models/TravelModel");
const { successRespone } = require("../responseController/responesController");

const getAllTravel = async (req, res, next) => {
  try {
      const {id}=req.params


    const travel = await Travel.find({})

    return successRespone(res, {
      statusCode: 200,
      message: "Find all routes",
      payload: {
        travel,
      },
    });
  } catch (error) {
    next(error);
  }
}

const addTravel = async (req, res, next) => {
  try {
    const {
      name,
      dates,
      destinations,
      activities,
      transportation_details,
      accommodation_details,
    } = req.body;

    const travelData = {
      name,
      dates,
      destinations,
      activities,
      transportation_details,
      accommodation_details,
    };
    const travel = await Travel.create(travelData);

    return successRespone(res, {
      statusCode: 200,
      message: "Travel row add successfully",
      payload: {
        travel,
      },
    });
  } catch (error) {
    next(error);
  }
};


const updateTravel = async (req, res, next) => {
    try {
      const {
        name,
        dates,
        destinations,
        activities,
        transportation_details,
        accommodation_details,
      } = req.body;

      const {id}=req.params
      
      const filter={_id:id};
      const newData={}
      if(name){
        newData.name=name;
      }
      if(dates){
        newData.dates=dates;
      }
      if(destinations){
        newData.destinations=destinations
      }
      if(activities){
        newData.activities=activities;
      }
      if(transportation_details){
        newData.transportation_details=transportation_details
      }
      if(accommodation_details){
        newData.accommodation_details=accommodation_details;
      }
  
      const travel = await Travel.findByIdAndUpdate(id,newData)
  
      return successRespone(res, {
        statusCode: 200,
        message: "Travel row Update successfully",
        payload: {
          travel,
        },
      });
    } catch (error) {
      next(error);
    }
  }


  const deleteTravel = async (req, res, next) => {
    try {
        const {id}=req.params
  
  
      const travel = await Travel.findByIdAndDelete(id)
  
      return successRespone(res, {
        statusCode: 200,
        message: "Travel row delete successfully",
        payload: {
          travel,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  const findByTravelId = async (req, res, next) => {
    try {
        const {id}=req.params
  
  
      const travel = await Travel.findById(id)
  
      return successRespone(res, {
        statusCode: 200,
        message: "Travel row find by id successfully",
        payload: {
          travel,
        },
      });
    } catch (error) {
      next(error);
    }
  }



module.exports={addTravel,updateTravel,deleteTravel,findByTravelId,getAllTravel}