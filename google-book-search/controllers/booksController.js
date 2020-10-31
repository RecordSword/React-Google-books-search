const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(request, response) {
        db.Book
            .find()
            .sort({ date: -1 })
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(error.status));
    },
    create: function(request, response) {
        console.log(request.body)
        db.Book
            .create(request.body)
            .then(dbModel => response.json(dbModel))
    },
    delete: function(request, response) {
        db.Book
            .findById(mongoose.Types.ObjectId(request.params.id))
            .then(dbModel => {dbModel.remove()})
            .then(dbModel => response.json(dbModel))
            .catch(error => console.log(error));
    }

}