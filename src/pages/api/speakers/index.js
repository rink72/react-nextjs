import path from "path"
import fs from "fs"

const { promisify } = require("util")
const readFile = promisify(fs.readFile)

async function handler(req, res) {
    const jsonFile = path.resolve("./", "db.json")

    try {
        const readFileData = await readFile(jsonFile)
        const speakers = JSON.parse(readFileData).speakers

        if (speakers) {
            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify(speakers, null, 2))
        }
        else {
            throw new Error("Speaker data not found")
        }
    }
    catch (e) {
        console.log("/api/speakers error", e)
        res.status(404).send("File not found on server")
    }
}

export default handler