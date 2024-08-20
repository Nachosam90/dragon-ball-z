const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({ //celdas con sus tiposs de datos
    name: { type: String, require: true },
    planet: { type: String, require: true },
    image: { type: String, require: true },
    ki: { type: Number },
},
    {
        collection: "characters",
        timestamps: true
    }
)

// creamos nuestro modelo
const Characters = mongoose.model("characters", characterSchema);
module.exports = Characters;