const mongoose = require("mongoose");

  
const EventSchema = mongoose.Schema({
  
    eventName: {
      type: String,
      required: true
    },
    eventDate: {
      type: Date,
      required: true
    },
   
    status: {
      type: String,
      required: true,
      enum: ['past', 'ongoing', 'upcoming']
    },
    
    batchName: {
      type: String,
      required: true
    },
    totalTickets: {
      type: Number,
      required: true
    },
    ticketPrice: {
      type: Number,
      required: true
    },
    ticketsSold: {
      type: Number,
      required: true
    }
  }, {
    versionKey: false
})

const EventModel = mongoose.model("Event", EventSchema);

module.exports = { EventModel };