import { useState, useEffect } from "react"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestDelay(delayTime, initialData = []) {
    const [data, setData] = useState(initialData)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState("")

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }

        delayFunc()
    }, [])

    async function delayFunction(originalRecords, newRecords, completeCallback = null) {
        try {
            setData(newRecords)
            await delay(delayTime)
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

    function updateRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = data.map(function (rec) { return rec.id === record.id ? record : rec })

        delayFunction(originalRecords, newRecords, completeCallback)
    }

    function insertRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = [record, ...originalRecords]

        delayFunction(originalRecords, newRecords, completeCallback)
    }

    function deleteRecord(record, completeCallback) {
        const originalRecords = data
        const newRecords = originalRecords.filter(filterRemovedRecord)

        function filterRemovedRecord(removeRecord) {
            return removeRecord.id != record.id
        }

        delayFunction(originalRecords, newRecords, completeCallback)
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

export default useRequestDelay