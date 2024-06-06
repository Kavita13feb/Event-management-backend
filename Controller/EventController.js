const { EventModel } = require("../Models/EventModel");


const getAllEvents = async (req, res)=>{

  const { status } = req.query;

  let filter = {};
  if (status) {
    
    filter.status = status;
  }
  console.log(filter)
        try {
          const events = await EventModel.find(filter);
          console.log(events)
          res.status(200).json(events);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      ;
}


const addEvents =async (req,res)=>{
  console.log(req.body)  
  
      
        // Creating a new event instance
        const event = new EventModel({...req.body,status:"upcoming"});
      
        try {
          // Saving the event to the database
          const newEvent = await event.save();
          console.log(newEvent)
          res.status(201).json(newEvent);
        } catch (err) {
          console.log(err)
          res.status(400).json({ message: err.message });
        }
      ;
}


const getSingleEvent = async (req, res) => {
    const { EventID } = req.params;
    try {
        const Event = await EventModel.findOne({ _id: EventID });
        
        res.status(200).send(Event);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

const updateEventData = async (req, res) => {
    console.log("update",req.body)
    const { EventID } = req.params;

  
    try {
        const Event = await EventModel.findByIdAndUpdate({ _id :EventID},req.body);
       
       console.log(Event)
        res.status(200).send(Event);
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

const cancelEvent = async (req, res) => {
  const { EventID } = req.params;


  try {
      const Event = await EventModel.findByIdAndDelete({ _id :EventID});
     
   
      res.status(200).send(Event);
  } catch (error) {
      res.status(400).send({ "msg": error.message });
  }
}

const SearchEventsByName =  async (req, res) => {
  const { name } = req.query;
  console.log(name)
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const events = await EventModel.find({ eventName: { $regex: name, $options: 'i' } });
   console.log(events)
    res.status(200).json(events);
  } catch (error) {
    console.error('Error searching events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports={
    getAllEvents,addEvents,getSingleEvent,updateEventData,SearchEventsByName,cancelEvent
}