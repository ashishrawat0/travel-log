var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    }, // String is shorthand for {type: String}
    description: String,
    body: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 12,
      default: 0,
    },
    date: { type: Date, default: Date.now },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
