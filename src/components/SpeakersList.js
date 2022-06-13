import { useContext } from 'react'
import ReactPlaceHolder from 'react-placeholder'

import SpeakerCard from "./SpeakerCard"
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext'
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay'

import { data } from "../SpeakerData"

function SpeakersList() {
    const { showSessions } = useContext(SpeakerFilterContext)
    const { yearFilter, searchQuery } = useContext(SpeakerFilterContext)

    function speakerHasSessions(speaker) {
        return speaker.sessions.find((session) => { return session.eventYear === yearFilter })
    }

    function speakerInQuery(speaker) {
        return (
            speaker.first.toLowerCase().includes(searchQuery) ||
            speaker.last.toLowerCase().includes(searchQuery)
        )
    }

    function getSpeakerCardJSX(speaker) {
        return (
            <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={(completeCallback) => { updateRecord({ ...speaker, favorite: !speaker.favorite }, completeCallback) }}
            />
        )
    }

    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord
    } = useRequestDelay(2000, data)

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                ERROR: <b>Loading speaker data failed {error}</b>
            </div>
        )
    }

    return (
        <div className="container speakers-list">
            <ReactPlaceHolder className="speakerslist-placeholder" type="media" rows={15} ready={requestStatus === REQUEST_STATUS.SUCCESS}>
                <div className="row">
                    {speakersData
                        .filter(speakerHasSessions)
                        .filter(speakerInQuery)
                        .map(getSpeakerCardJSX)}
                </div>
            </ReactPlaceHolder>
        </div>
    )
}

export default SpeakersList
