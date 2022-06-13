import { useContext } from "react"

import { SpeakerContext } from "../contexts/SpeakerContext"

import SpeakerFavourite from "./SpeakerFavourite"

function SpeakerInfo() {
    const { speaker } = useContext(SpeakerContext)

    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {speaker.first} {speaker.last}
                </h3>
            </div>
            <SpeakerFavourite />
            <div>
                <p className="card-description">
                    {speaker.bio}
                </p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{speaker.company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{speaker.twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerInfo