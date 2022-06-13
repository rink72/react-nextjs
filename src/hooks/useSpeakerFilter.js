import { useState } from "react";

function useSpeakerFilter() {
    const [showSessions, setShowSessions] = useState(true)
    const [yearFilter, setYearFilter] = useState("2019")
    const [searchQuery, setSearchQuery] = useState("")

    const EVENT_YEARS = [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
    ]

    return {
        showSessions,
        setShowSessions,
        searchQuery,
        setSearchQuery,
        yearFilter,
        setYearFilter,
        EVENT_YEARS
    }
}

export default useSpeakerFilter