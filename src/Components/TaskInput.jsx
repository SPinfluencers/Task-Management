import React from 'react'
import axios from 'axios'
import style from './task.css'

const TaskInput = () => {
    const [table, setTable] = React.useState([])
    // const [buttonText, setButtonText] = React.useState("Next")

    const getData = () => {
        axios.get(`https://erin-healthy-nightingale.cyclic.app/task_data`).then((res) => {
            console.log(res.data)
            setTable(res.data)
        })
        .catch((err) => {
            console.log(err.messsage)
        })
    }

    const toggleStatus = () => {
        alert('Task Completed')
    }

    React.useEffect(() => {
       getData()
    //    toggleStatus()
    }, [])
    console.log(table)

  return (
    <div>
        <table class="a">  
                <tr>
                    <th>SR.NO</th>
                    <th>TASK NAME</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>DETAILS</th>
                    <th>STATUS</th>
                </tr>
                {
                    table.map((item, id) => {
                        return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.date}</td>
                                    <td>{item.details}</td>
                                    <td>
                                        <button onClick={toggleStatus}>Status</button>
                                    </td>
                                </tr>
                        )
                    }) 
                }
        </table>
    </div>
  )
}

export default TaskInput