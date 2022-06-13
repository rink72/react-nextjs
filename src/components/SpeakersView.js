import SpeakersList from "./SpeakersList"
import SpeakersToolbar from "./SpeakersToolbar"
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext"

function SpeakersView() {
    return (
        <SpeakerFilterProvider>
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    )
}

export default SpeakersView
