const path = require("path");


const controller = {
    index:function(req,res){
        res.render('../views/boton')
    },
    info: function(req,res){
        res.render('../views/front')
    }
};

module.exports = controller;