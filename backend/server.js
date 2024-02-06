const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const coookieParser = require("cookie-parser");


const app = express();

//Middlewares
app.use(express.json());
app.use(coookieParser());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Routes Middleware
app.use("/api/users", userRoute)

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

//error middleware
app.use(errorHandler);

//connect to the database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((err) => console.log(err));