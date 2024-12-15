
const { Schema, model } = require("mongoose");

const ResistanceSchema = new Schema(
  {
    type: {
      type: String,
      default: "resistance",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 30,
    },
    weight: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true } 
);

const Resistance = model("Resistance", ResistanceSchema);

module.exports = Resistance;
