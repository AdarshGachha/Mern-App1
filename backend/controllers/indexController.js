const UserModel = require("../models/userModel");
exports.homepage = (req, res, next) => {
    res.status(200).json({ message: "this is test route" });
};

exports.createuser = async (req, res, next) => {
    try {
        let user = new UserModel(req.body);
        user = await user.save();
        res.status(201).json({ message: "Successfully Created", user });
    } catch (error) {
        res.status(501).json(error.message);
    }
};

exports.allusers = async (req, res, next) => {
    try {
        const data = await UserModel.find();
        res.status(200).json({ message: "this is test route", data });
    } catch (error) {
        res.status(501).json(error);
    }
};
