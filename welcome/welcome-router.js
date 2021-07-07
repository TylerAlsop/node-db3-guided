const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to the guided lesson for node-db3.",
	})
})

module.exports = router