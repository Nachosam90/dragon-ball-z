const express = require("express");
const { connectDB } = require("./src/utils/db")
const env = require("dotenv")
env.config()
const router = require("./src/api/routes/characters.routes")


connectDB();
const server = express();
const PORT = process.env.PORT; //usamos la variable de entorno PORT

server.use(express.json())
server.use("/", router)

server.listen(PORT, () => {
    console.log(`listen port http://localhost:${PORT} `)
})

