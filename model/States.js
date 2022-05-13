const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    stateCode: {
      type: String,
      required: true,
      unique: true,
    },
    funfacts: {
      type: Array,
      of: String,
    },
  });
  
  module.exports = mongoose.model("State", stateSchema);