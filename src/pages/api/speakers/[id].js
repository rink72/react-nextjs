import path from "path"
import fs from "fs"

const { promisify } = require("util")
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function handler(req, res) {
    const jsonFile = path.resolve("./", "db.json")
    const method = req?.method
    const id = parseInt(req?.query.id)
    const recordFromBody = req?.body

    switch (method) {
        case "POST":
            await postMethod()
            break
        case "PUT":
            await putMethod()
            break
        case "DELETE":
            await deleteMethod()
            break
        default:
            res.status(501).send(`Method ${method} not implemented`)
    }

    function updateExistingSpeaker(record) {
        return record.id == id ? recordFromBody : record
    }

    function removeSpeaker(record) {
        return record.id != id
    }

    function getHighestCurrentId(accumulator, currentValue) {
        const currentId = parseInt(currentValue.id)

        return currentId > accumulator ? currentId : accumulator
    }

    async function putMethod() {
        try {
            const readFileData = await readFile(jsonFile)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send("Error: Request failed with status 404")
            }

            const newSpeakersArray = speakers.map(updateExistingSpeaker)
            writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))

            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify({ recordFromBody }, null, 2))
        }
        catch (e) {
            console.log("/api/speakers error", e)
            res.status(500).send("PUT error", e)
        }
    }

    async function postMethod() {
        try {
            const readFileData = await readFile(jsonFile)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send("Error: Request failed with status 404")
            }

            const newId = speakers.reduce(getHighestCurrentId, 0) + 1
            const newSpeaker = { ...recordFromBody, id: newId.toString() }

            const newSpeakersArray = [newSpeaker, ...speakers]
            writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))

            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify({ newSpeaker }, null, 2))
        }
        catch (e) {
            console.log("/api/speakers error", e)
            res.status(500).send("POST error", e)
        }
    }

    async function deleteMethod() {
        try {
            const readFileData = await readFile(jsonFile)
            const speakers = JSON.parse(readFileData).speakers

            if (!speakers) {
                res.status(404).send("Error: Request failed with status 404")
            }

            const newSpeakersArray = speakers.filter(removeSpeaker)
            writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))

            res.setHeader("Content-Type", "application/json")
            res.status(200).send(JSON.stringify({ recordFromBody }, null, 2))
        }
        catch (e) {
            console.log("/api/speakers error", e)
            res.status(500).send("DELETE error", e)
        }
    }
}

export default handler