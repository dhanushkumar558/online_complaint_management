const express = require("express");
const router = express.Router();
const login_post = require("../../controllers/Officer/login-post");
router.post("/", login_post.login_post);
module.exports = router;
