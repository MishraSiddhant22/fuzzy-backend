const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { urlencoded } = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");


dotenv.config();
const port = process.env.PORT;

/// ------- database connection ----------////////
require("./database/conn");

////------------- use -------------////
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

////---------- Routes --------///////////////
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);



app.get("/", (req, res) => {
    res.send("Express Home Page");
})

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})