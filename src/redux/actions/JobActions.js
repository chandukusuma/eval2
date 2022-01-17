// import { useState } from "react";

export const JobData = ({data}) => {

    // const [job, setJob] = useState()

    return(

        <div>
            <div className="list">
                <h4>Company_Name : {data.Company_Name}
                <br/>
                    title : {data.Job_title}
                    <br/>
                    salary : {data.Salary_range}
                    <br/>
                    description: {data.Job_description}
                    <br/>
                    location: {data.Location}
                    <br/>
                    type : {data.Job_type}
                </h4>

            </div>
        </div>
    )
}