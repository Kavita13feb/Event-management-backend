const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { EventRouter } = require("./Routes/EventsRouter");
const Connection = require("./db");

const app = express();
const PORT = process.env.port || 3030;
app.options("*", cors());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/events", EventRouter);



app.listen(PORT, async () => {
    try {
        await Connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Failed to connect to database !!");
        console.log(error.message);
    }
    console.log(`Server is running on port ${PORT}`);
});