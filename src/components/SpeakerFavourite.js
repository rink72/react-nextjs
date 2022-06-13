import { useState, useContext } from "react"

import { SpeakerContext } from "../contexts/SpeakerContext"

function SpeakerFavourite() {
    const { speaker, updateRecord } = useContext(SpeakerContext)
    const [updating, setUpdating] = useState(false)

    function completeCallback() {
        setUpdating(false)
    }

    function onClick() {
        setUpdating(true)
        updateRecord({ ...speaker, favorite: !speaker.favorite }, completeCallback)
    }

    return (
        <div className="action padB1">
            <span onClick={onClick}>
                <i className={speaker.favorite ? "fa fa-star orange" : "fa fa-star-o orange"} />
                {" "}Favorite{" "}

                {updating ? (<span className="fas fa-circle-notch fa-spin" />) : null}
            </span>
        </div>
    )
}

export default SpeakerFavourite