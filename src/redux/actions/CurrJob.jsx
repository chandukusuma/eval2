import { useState } from "react";

import { JobData } from "./JobActions";

export const CurrJob = ({data, getJob}) => {
    const [job, setJob] = useState()

    const handleData = () => {

        setJob()
        console.log(job)
    }

    return (

        <div onClick={handleData}>
            <h3>Job_type: {data.Job_title}</h3>

            <JobData />
        </div>
    )
}