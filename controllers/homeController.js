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
const detailHome = async (req, res) => {
  try {
    const slug = req.params.slug;
    const data = await Course.findOne({ slug: slug });
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
const createHome = async (req, res) => {
  try {
    const name = await req.body.name;
    const course = await Course.findOne({ name: name });
    if (course) {
      res.status(400).json({
        course,
        message: "Khóa học đã tồn tại!!!",
      });
    } else {
      const slug = await name.replace(/\s+/g, "-");

      const courseCreate = new Course({
        name,
        slug: slug,
        description: req.body.description,
      });

      await courseCreate.save();

      res.status(200).json({
        course: courseCreate,
        message: "Khóa học đã được tạo !!!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getHome, detailHome, createHome };
