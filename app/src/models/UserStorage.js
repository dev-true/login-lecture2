"use strict";

const fs = require("fs").promises;

class UserStorage{
    //private는 항상 최상단에 올려주는게 규칙
    static #getUserInfo(data, id)
    {
        const users = JSON.parse(data);

        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //키값들만 리스트로 만듬[id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log(userInfo);
        return userInfo;
    }

    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
    }
}

module.exports = UserStorage;