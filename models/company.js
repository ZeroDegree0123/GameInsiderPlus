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
        type: Date,
        default: function() {
            return new Date().getFullYear()
          },
    },
});

module.exports = mongoose.model("Company", companySchema);