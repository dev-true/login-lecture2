"use strict"

const User = require("../../models/user");

const output = {
    home :  (req, res)=>{
        res.render("home/index");
    },
    
    login : (req, res)=>{
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    }
};



//req(리퀘스트) 프론트에서 요청한 데이터들을 담아놓는 곳
const process = {
    login : async(req, res) => {
        const user = new User(req.body);
        return res.json(await user.login());
    },

    register : async(req, res) => {
        const user = new User(req.body);
        return res.json(await user.register());
    },

};

module.exports = {
    output,
    process,
};