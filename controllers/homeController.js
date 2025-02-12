const Course = require("../models/courseModele");

const getHome = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      quantity: courses.length,
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
const updateHome = async (req, res) => {
  try {
    const slug = await req.params.slug;

    // findByIdAndUpdate(userId, updatedData, { new: true }):*
    // Tìm kiếm người dùng theo ID (userId).
    // Cập nhật dữ liệu bằng updatedData.
    // { new: true }: Trả về document đã được cập nhật.

    const course = await Course.findOneAndUpdate({ slug: slug }, req.body, {
      new: true,
    });

    if (!course) {
      // return ở đây để code sẽ dùng lại nếu không tìm thấy nó sẽ không chạy phần code ở dưới
      return res.status(400).json({
        course,
        message: "Khóa học không tồn tại !!!",
      });
    }
    res.status(200).json({
      course,
      message: "Cập nhập khóa học thành công !!!",
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteHome = async (req, res) => {
  try {
    const slug = await req.params.slug;
    const course = await Course.findByIdAndDelete({ _id: slug });
    if (!course) {
      // return ở đây để code sẽ dùng lại nếu không tìm thấy nó sẽ không chạy phần code ở dưới
      return res.status(400).json({
        course,
        message: "Khóa học không tồn tại !!!",
      });
    }
    res.status(200).json({
      course,
      message: "Xóa khóa học thành công !!!",
    });
  } catch (error) {
    console.log(error);
  }
};
const restoreHome = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getHome,
  detailHome,
  createHome,
  updateHome,
  deleteHome,
  restoreHome,
};
