const express = require("express");
const cors = require("cors");
const Cases = require("./models/covidData");
require("./db/conn")
require("./models/covidData")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

app.get('/',(req, res) => {
    res.send("HELLO THIS iS COVID API");
})

app.post("/cases", async(req, res) => {
    try{
     
        const covidData = new Cases(req.body);
        const createData = await covidData.save();
        console.log(createData);
        res.staus(201).send(createData)
    }catch(e){
        res.status(400).send(e)
    }

})

app.get("/cases", async(req, res) => {
    try{
        const covidData =await Cases.find({})
        res.status(200).send(covidData)
    }catch(e){
        res.status(400).send(e)
    }

})

app.delete("/cases/:id", async(req, res) => {
    try{
        const deleteData = await Cases.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }else{
            return res.status(200).send(deleteData)
        }
    }catch(e){
        res.status(400).send(e)
    }
})
app.get("/cases/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const covid_id = await Cases.findById(_id);
        res.status(200).send(covid_id);
    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port,(req, res) => {
    console.log(`app is running on ${port}`);
})