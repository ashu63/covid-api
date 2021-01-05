const mongoose = require('mongoose');

const covidSchema = new mongoose.Schema({
    countryName:{
        type: String,
        require: true
    },
    totalCases:{
        type: Number,
        require: true
    },
    totalDeaths:{
        type: Number,
        require: true
    }
})
const Cases = new mongoose.model('Cases', covidSchema);
module.exports = Cases;