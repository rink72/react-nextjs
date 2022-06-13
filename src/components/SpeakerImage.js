function SpeakerImage({ image, first, last }) {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={image}
                width="300"
                height="300"
                alt={`${first} ${last}`}
            />
        </div>
    )
}

export default SpeakerImage