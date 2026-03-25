const express = require("express")
const { getallUsers } = require("../controllers/userControllers")
const router = express.Router()

router.get("/", getallUsers)

module.exports = router