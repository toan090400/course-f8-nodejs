const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getHome);

router.get("/trash", homeController.trashHome);

router.get("/:slug", homeController.detailHome);

router.post("/create", homeController.createHome);

router.put("/update/:slug", homeController.updateHome);

// xóa mềm
router.delete("/delete/:slug", homeController.deleteHome);

router.patch("/restore/:slug", homeController.restoreHome);

router.delete("/destroy/:slug", homeController.destroyHome);

module.exports = router;
