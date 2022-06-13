import { createContext } from "react";

import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext()

function SpeakerFilterProvider({ children }) {
    const { showSessions, setShowSessions, searchQuery, setSearchQuery, yearFilter, setYearFilter, EVENT_YEARS } = useSpeakerFilter()

    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions, searchQuery, setSearchQuery, yearFilter, setYearFilter, EVENT_YEARS }}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider }