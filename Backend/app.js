const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

const user = require("./routes/userRoute");
const podcast = require("./routes/podcastRoute");

app.use("/api/v1", podcast);
app.use("/api/v1", user);

//Middleware
app.use(errorMiddleware);

module.exports = app;