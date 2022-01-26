const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companyProductSchema = new Schema({
    message: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    // Will add and maintain
    // createdAt & updatedAt properties
    timestamps: true
});

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
    products: [companyProductSchema],
});

module.exports = mongoose.model("Company", companySchema);