const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHome);

router.get("/:slug", homeController.detailHome);

router.post("/create", homeController.createHome);
// router.patch("/", homeController.getHome);
// router.delete("/", homeController.getHome);

module.exports = router;
