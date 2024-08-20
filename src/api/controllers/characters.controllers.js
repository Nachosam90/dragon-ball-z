const Characters = require("../models/characters.model")

const getCharacters = async (req, res) => {
    try {
        // http://localhost:3010/characters?pag=5&limit=10

        let pag = parseInt(req.query.pag) //convertir el string en number
        let limit = parseInt(req.query.limit) // convertir el string en number
        const numCharacters = await Characters.countDocuments() //cantidad de documentos que hay


        //limite por defecto
        /* if (limit >= 10) {
            limit = 10
        }
        if (limit <= 0) {
            limit = 5
        } */
        limit = limit >= 10 ? 10 : limit <= 0 ? 5 : limit


        pag = !isNaN(pag) ? pag : 1
        limit = !isNaN(limit) ? limit : 5  // limite por defecto
        console.log(pag, limit)
        let numPage = Math.ceil(numCharacters / limit)

        if (pag > numPage) {
            pag = numPage;
        }
        if (pag < 1) {
            pag = 1
        }


        /* 
            pag = 3;
            limit = 10

            20 --> pagina 2 
        */
        const allCharacters = await Characters.find().skip((pag - 1) * limit).limit(limit)
        // skip --> descarto los elementos que no estan en la pagina indicada
        // limit, solo devuelvo la cantidad definida en el limit

        res.json({
            previewPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            data: allCharacters,
            quantity: allCharacters.length,
            data: allCharacters
        })
    } catch (error) {
        res.json(error)

    }
}
const getCharacterById = async (req, res) => {
    const { id } = req.params
    const character = await Characters.findById(id);
    res.json(character)
}
const updateCharacter = async (req, res) => {
    const char = req.body;
    const { id } = req.params
    const character = await Characters.findByIdAndUpdate(
        id,
        char,
        { new: true }
    )
    res.json(character)
}


module.exports = { getCharacters, getCharacterById, updateCharacter };
