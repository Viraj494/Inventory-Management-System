const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter a name"]
    },

    email: {
        type: String,
        required: [true, "Please enter an e mail"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid e mail"
        ]
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Password must be upto 6 characters"],
        maxLength: [23, "Password must not be more than 23 characters"]

    },

    photo: {
        type: String,
        required: "Please add a photo",
        default: "https://static.thenounproject.com/png/5572513-200.png"
    },

    phone: {
        type: String,
        default: "+94"
    },

    Bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "Bio"
    }
},
{
    timeStamps: true,
}
)

const User = mongoose.model("User", userSchema);
module.exports = User;