import { useContext } from "react"

import { SpeakerContext } from "../contexts/SpeakerContext"

function SpeakerDelete() {
    const { speaker, deleteRecord } = useContext(SpeakerContext)

    function onClick(event) {
        event.preventDefault()

        if (window.confirm("Are you sure you want to delete this speaker?")) { deleteRecord(speaker) }
    }

    return (
        <span className="session w-100">
            <a href="#" className="remSes">
                <i onClick={onClick}>-</i>
            </a>
            <span className="padL2">Delete speaker</span>
        </span>
    )
}

export default SpeakerDelete