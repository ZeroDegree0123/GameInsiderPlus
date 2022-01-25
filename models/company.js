const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
    image: {
        type: String,
        match: /https:\/\//,
        required: false,
    },
    title: {
        type: String
    },
    founded: {
        type: Number,
        min: 0
    },
    games: {
        type: String,
    },
});

module.exports = mongoose.model("Company", companySchema);