const mongoose = require("mongoose");

connection_url = "mongodb+srv://admin:rDnJTfLvcKKPzZ7m@cluster0.fh1jo.mongodb.net/covid-api?retryWrites=true&w=majority"

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection Sucessfull");
}).catch((e) => {
    console.log("connection Failed");
})