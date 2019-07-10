const mongoose = require("mongoose");
const Shark = mongoose.model("Shark");

module.exports = {
    index: function(req, res) {
        res.render("index");
    }
};