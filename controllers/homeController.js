const Course = require("../models/courseModele");

const getHome = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      courses,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getHome };
