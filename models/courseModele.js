const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    // require: true dữ liệu phải được truyền vào "không để trống"
    // unique: true dữ liệu không được giống nhau trong dâta
    name: { type: String, require: true },
    slug: { type: String, slug: "name" },
    description: { type: String },
  },
  {
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    timestamps: true,
  }
);
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Course", Course);
