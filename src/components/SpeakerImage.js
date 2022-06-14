import { useContext, useState } from "react"

import { SpeakerContext } from "../contexts/SpeakerContext"

function ImageWithFallback({ src, ...props }) {
    const [error, setError] = useState(false)
    const [imgSrc, setImgSrc] = useState(src)

    function onError() {
        if (!error) { 
            setError(true) 
            setImgSrc("/images/speaker-99999.jpg")
        }
    }

    return <img src={imgSrc} {...props} onError={onError} />
}

function SpeakerImage() {
    const { speaker } = useContext(SpeakerContext)

    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <ImageWithFallback
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