import Session from "./Session"

import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext"

function Sessions({ sessions }) {

    return (
        <div className="sessionBox card h-250">
            <Session title={sessions[0].title} room={sessions[0].room.name} />
        </div>
    )
}

export default Sessions