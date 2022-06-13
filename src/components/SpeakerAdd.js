function SpeakerAdd({ eventYear, insertRecord }) {
    function onClick(event) {
        event.preventDefault()

        const firstLast = window.prompt("Enter first and last name: ", "")
        const firstLastArray = firstLast.split(" ")

        insertRecord(
            {
                id: "99999",
                first: firstLastArray[0],
                last: firstLastArray[1],
                sessions: [
                    {
                        id: "88888",
                        title: `New session for ${firstLastArray[0]}`,
                        room: {
                            name: "Main room"
                        },
                        eventYear
                    }
                ]
            }
        )
    }

    return (
        <a href="#" className="addSes">
            <i onClick={onClick}>+</i>
        </a>
    )
}

export default SpeakerAdd