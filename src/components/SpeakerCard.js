import { useContext } from 'react'

import Sessions from "./Sessions"
import SpeakerImage from "./SpeakerImage"
import SpeakerInfo from "./SpeakerInfo"
import SpeakerDelete from './SpeakerDelete'

import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext"
import { SpeakerProvider } from "../contexts/SpeakerContext"

function SpeakerCard({ speaker, updateRecord, insertRecord, deleteRecord }) {
    const { showSessions } = useContext(SpeakerFilterContext)

    return (
        <SpeakerProvider speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-wx-12">
                <div className="card card-height p-4 mt-4">
                    <SpeakerImage />
                    <SpeakerInfo />
                </div>
                {showSessions ? <Sessions /> : null}
                <SpeakerDelete />
            </div>
        </SpeakerProvider>
    )
}

export default SpeakerCard