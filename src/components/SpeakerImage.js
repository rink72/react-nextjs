import { useContext } from "react"

import { SpeakerContext } from "../contexts/SpeakerContext"

function SpeakerImage() {
    const { speaker } = useContext(SpeakerContext)

    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${speaker.id}.jpg`}
                width="300"
                height="300"
                alt={`${speaker.first} ${speaker.last}`}
            />
        </div>
    )
}

export default SpeakerImage