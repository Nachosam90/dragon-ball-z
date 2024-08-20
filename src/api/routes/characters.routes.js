const express = require("express");
const router = express.Router();
const { getCharacters, getCharacterById, updateCharacter } = require("../controllers/characters.controllers")

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacterById)
router.put("/characters/:id", updateCharacter)

module.exports = router;
