import {useEffect, useState} from "react";

import {nanoid} from  "nanoid";
import {AddingJobs} from "./AddingJob"
// import {JobData} from "./JobActions"
import { CurrJob } from "./CurrJob";

export const Job = () => {

    const [list, setList] = useState([])
    // const [job, setJob] = useState()
    // const [show, setShow] = useState(false)

    useEffect(() => {

        getJob()
    }, [])

    const handleSubmit = (data) => {

        const payload = {
            data: data,
            id: nanoid(7)
        }

        fetch("http://localhost:3001/job", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type" : "application/json"
            }
        }).then(() => {
            getJob()
        })
    }

    const getJob = () => {


        fetch(`http://localhost:3001/job`)
        .then(d => d.json())
        .then(res => {
            setList(res)
        })
    }

    // const handleData = (data) => {

    //     setJob(data)
    //     setShow(true)

    // }

    const sortList = () => {

        list.sort((a, b) => {
            return a.data.Salary_range - b.data.Salary_range
        })


        var New = list
        setList(New)
    }

    const sortListhigh = () => {

        list.sort((a, b) => {return b.data.Salary_range - a.data.Salary_range})
        var New = list;
        setList(New)
    }


    return (

        <>
            <div>
                <AddingJobs getData={handleSubmit} />

                <div>
                    <button onClick={sortList}> sort low to high</button>
                    <button onClick={sortListhigh}> sort high to low</button>

                    {
                        list.map((e, i) => {
                            <CurrJob key={e.id}{...e} />
                        })
                    }
                </div>
            </div>
        </>
    )
}