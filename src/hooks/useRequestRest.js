import { useState, useEffect } from "react"
import axios from "axios"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const restUrl = "api/speakers"

function useRequestRest() {
    const [data, setData] = useState([])
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState("")

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function delayFunc() {
            try {
                const result = await axios.get(restUrl)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(result.data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }

        delayFunc()
    }, [])

    function updateRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = data.map(function (rec) { return rec.id === record.id ? record : rec })

        async function putCall() {
            try {
                setData(newRecords)
                axios.put(`${restUrl}/${record.id}`, record)
            }
            catch (e) {
                setData(originalRecords)
                console.log("Error inside delayFunction", error)
            }
            finally {
                if (completeCallback) {
                    completeCallback()
                }
            }
        }

        putCall()
    }

    function insertRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = [record, ...originalRecords]

        async function postCall() {
            try {
                setData(newRecords)
                axios.post(`${restUrl}/99999`, record)
            }
            catch (e) {
                setData(originalRecords)
                console.log("Error inside delayFunction", error)
            }
            finally {
                if (completeCallback) {
                    completeCallback()
                }
            }
        }

        postCall()
    }

    function deleteRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = originalRecords.filter(filterRemovedRecord)

        function filterRemovedRecord(removeRecord) {
            return removeRecord.id != record.id
        }

        async function deleteCall() {
            try {
                setData(newRecords)
                axios.delete(`${restUrl}/${record.id}`, record)
            }
            catch (e) {
                setData(originalRecords)
                console.log("Error inside delayFunction", error)
            }
            finally {
                if (completeCallback) {
                    completeCallback()
                }
            }
        }

        deleteCall()
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord
    }
}

export default useRequestRest