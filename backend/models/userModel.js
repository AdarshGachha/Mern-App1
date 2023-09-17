const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        username: {
            type: String,
            minLength: [4, "Username must have atleast 4 characters"],
            required: [true, "Username is required"],
            unique: true,
        },
        password: {
            type: String,
            select: false,
            minLength: [6, "Password must have atleast 6 characters"],
            required: [true, "Password is required"],
            // match: [//, "Invalid Password "]
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
