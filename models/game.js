const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameReviewSchema = new Schema({
    message: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: undefined
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
  // Will add and maintain
  // createdAt & updatedAt properties
    timestamps: true
});

const gameSchema = new Schema({
    maxPlayers: {
            type: Number,
            min: 0
        },
    minPlayers: {
            type: Number,
            min: 1
        },
    image: {
        type: String, 
        match: /https:\/\//,
        required: false,
    },
    gameTitle: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Date,
        default: function() {
            return new Date().getFullYear()
          },
        },
    esrb: {
        type: String,
        enum: ['eC', 'E', 'E 10+', 'T', 'M', 'A', 'RP']
    },
    // maker: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Company'
    // },
    platforms: {
        type: String,
        enum: ['Xbox', 'Playstation', 'Nintendo', 'PC', 'VR']
    },
    crossPlatform: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    
    genre: {
        type: String,
    },
    // reviews: [gameReviewSchema],
})










module.exports = mongoose.model("Game", gameSchema);