const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { EventRouter } = require("./Routes/EventsRouter");

const app = express();

app.options("*", cors());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/events", EventRouter);



app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to database");
    } catch (error) {
        console.log("Failed to connect to database !!");
        console.log(error.message);
    }
    console.log(`Server is running on port ${process.env.port}`);
});