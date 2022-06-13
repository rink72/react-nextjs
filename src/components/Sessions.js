import { useContext } from 'react'

import Session from "./Session"

import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext"

function Sessions({ sessions }) {
    const { yearFilter } = useContext(SpeakerFilterContext)

    function getSessionsForYear(session) {
        return session.eventYear === yearFilter
    }

    function getSessionJSX(session) {
        return (
            <div className="session w-100" key={session.id}>
                <Session title={session.title} room={session.room.name} />
            </div>
        )
    }

    return (
        <div className="sessionBox card h-250">
            {sessions.filter(getSessionsForYear).map(getSessionJSX)}
        </div>
    )
}

export default Sessions