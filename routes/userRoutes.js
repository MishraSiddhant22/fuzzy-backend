const express = require("express");
const { register, login, getUserData, updateLevel, rankList } = require("../controller/userController");
const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/get_user_data", getUserData);
router.post("/update_level", updateLevel);
router.get("/rank_list", rankList);


module.exports = router;