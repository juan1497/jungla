const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Mensaje = require("../mail/configMail");
const register = async (req, res, next) => {
    try {
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            
        });
        const userDb = await newUser.save();
        Mensaje(userDb)
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: userDb.name
        });
    } catch (error) {
        return next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email });
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },
                req.app.get("secretKey"), { expiresIn: "1h" }
            );
            return res.json({
                status: 201,
                message: HTTPSTATUSCODE[201],
                data: { user: userInfo, token: token }
            });
        } else {
            return res.json({
                status: 401,
                message: HTTPSTATUSCODE[401],
                data: {}
            })
        }
    } catch (error) {
        return next(error);
    }
}


const logout = (req, res, next) => {
    try {
        return res.json({
            status: 202,
            message: HTTPSTATUSCODE[202],
            token: null
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { register, login, logout };