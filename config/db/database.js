const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/course-f8-nodejs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully!!!");
  } catch (error) {
    console.log("Connect Failure!!!");
  }
};
module.exports = { connect };
