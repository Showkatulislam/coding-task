const { Schema, model } = require("mongoose");
const TravelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    dates: {
      type: Date,
    },
    destinations: {
      type: String,
    },
    activities: {
      type: String,
    },
    transportation_details: {
      type: String,
    },
    accommodation_details: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Travel = model("travels", TravelSchema);

module.exports = Travel;
