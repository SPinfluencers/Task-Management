import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Task = () => {

    const [state, setstate] = React.useState([])

    const { register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        // data.preventDefault();
    //    console.log(data)
       axios.post(`https://erin-healthy-nightingale.cyclic.app/task_data`, {...data})
       .then((res) => {
        console.log(res)
       })
       .catch((error) => {
        console.log(error.message)
       })
    }

    const getData = () => {
        axios.get(`https://erin-healthy-nightingale.cyclic.app/task_data`)
        .then((res) => {
            setstate(res.data)
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    React.useEffect(() => {
        getData()
    }, [])

    // let today = new Date()
    // today.toISOString().split('T')[0]

  return (
    <div>
        <h1>Task Management</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input 
                placeholder='Task Name...'
                type='text'
                {...register('name', {require: true})}
             />
             <br />

            <input 
                placeholder='Date'
                type='date'
                {...register('date', {valueAsDate: true})}
             />
   
             <br />
        
            <input 
                placeholder='Details...'
                type='text'
                {...register('details', {require: true})}
             />
             <br />

             <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Task