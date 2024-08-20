const express = require("express");
const router = express.Router()
const { getCharacters } = require("../controllers/characters.controllers");

router.get("/characters", getCharacters)

module.exports = router
