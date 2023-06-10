var express = require("express");
var router = express.Router();
const { v4: uuidV4 } = require("uuid");

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/:room", (req, res) => {
	res.render("room", { roomId: req.params.room });
});

module.exports = router;
