var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },


    insertOne: function(cols, vals, cb) {
        console.log("in burger.js, vals are: " + vals);
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },



    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;