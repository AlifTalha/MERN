const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getAllUsers);
router.post("/add", userController.addUser);

module.exports = router;