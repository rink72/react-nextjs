import { useContext } from 'react'

import Sessions from "./Sessions"
import SpeakerImage from "./SpeakerImage"
import SpeakerInfo from "./SpeakerInfo"

import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext"

function SpeakerCard({ speaker, onFavoriteToggle }) {
    const { id, first, last, sessions } = speaker
    const { showSessions } = useContext(SpeakerFilterContext)

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-wx-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} image={`/images/speaker-${id}.jpg`} first={first} last={last} />
                <SpeakerInfo {...speaker} onFavoriteToggle={onFavoriteToggle} />
            </div>
            {showSessions ? <Sessions sessions={sessions} /> : null}
        </div>
    )
}

export default SpeakerCard