import { useState } from "react"

function SpeakerFavourite({ favorite, onFavoriteToggle }) {
    const [updating, setUpdating] = useState(false)

    function completeCallback() {
        setUpdating(false)
    }

    return (
        <div className="action padB1">
            <span onClick={() => {
                setUpdating(true)
                return onFavoriteToggle(completeCallback)
            }}>
                <i className={favorite ? "fa fa-star orange" : "fa fa-star-o orange"} />
                {" "}Favorite{" "}

                {updating ? (<span className="fas fa-circle-notch fa-spin" />) : null}
            </span>
        </div>
    )
}

export default SpeakerFavourite