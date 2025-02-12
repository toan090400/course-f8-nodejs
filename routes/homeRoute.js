const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHome);

router.get("/:slug", homeController.detailHome);

router.post("/create", homeController.createHome);

router.patch("/update/:slug", homeController.updateHome);

router.delete("/delete/:slug", homeController.deleteHome);

module.exports = router;
