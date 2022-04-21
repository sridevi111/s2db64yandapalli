const mongoose = require("mongoose")
const forestSchema = mongoose.Schema({
    forest_location: String,
    forest_size: String,
    forest_name: String
})
module.exports = mongoose.model("Forest",forestSchema)