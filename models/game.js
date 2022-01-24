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
    image: String,
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
    },
    mpaaRating: {
        type: String,
        enum: ['eC', 'E', 'E 10+', 'T', 'M', 'A', 'RP']
    },
    maker: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    reviews: [gameReviewSchema],
    platforms: {
        type: String,
        enum: ['Xbox', 'Playstation', 'Nintendo', 'PC', 'VR']
    },
    crossPlatform: {
        type: Boolean,
        default: false
    },
    
    genre: {
        type: String,
        enum: ['Action', 'Adventure & Casual', 'Role-Playing', 'Simulation', 'Stragety', 'Sandbox', 'Sports', ]
    }
})










module.exports = mongoose.model("Game", gameSchema);