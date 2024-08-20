const express = require("express");
const router = express.Router();
const { getCharacters, getCharacterById } = require("../controllers/characters.controllers")

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacterById)

module.exports = router;
