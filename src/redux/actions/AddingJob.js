import React from "react"
import {useState} from "react"
import {nanoid} from "nanoid"


 export const AddingJobs = ({getData}) => {

    const [form, setForm] = useState({
        Company_Name : "",
        Job_title : "",
        Salary_range: "",
        Job_description: "",
        Location: "",
        Job_type: "",
    })

    const [list, setList] = useState([])

    const handleChange = (e) => {

        //console.log(e.target.Company_Name, e.target.value);

        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (data) =>{

        data.preventDefault()

        const payload = {
            data: form,
            id: nanoid(7)
        }
        setList([...list, payload])
        getData(form)
        //console.log(list)
        return
    }
    

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Company">Company_name</label> <br/>
                    <input name="company"  placeholder= "Company_name"  onChange={handleChange} />
                </div>
                <div>
                    <label>Job_title</label><br/>
                    <input name="title" placeholder= "Job_title"  onChange={handleChange} />
                </div>
                <div>
                    <label>Salary_range</label> <br/>
                    <input name="salary" placeholder= "Salary_range"  onChange={handleChange} />
                </div>
                <div>
                    <label>Job_description</label> <br/>
                    <input name="description" placeholder= "Job_description"  onChange={handleChange} />
                </div>
                <div>
                    <label>Location</label> <br/>
                    <input name="location" placeholder= "Location"  onChange={handleChange} />
                </div>
                <div>
                    <label>Job_type</label> <br/>
                    <input name="type" placeholder= "Job_type" onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="submit" onSubmit={handleSubmit} />
                </div>
            </form>
        )
}


export default AddingJobs
