const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
})