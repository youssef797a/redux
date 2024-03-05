import React, { useState } from 'react'
import { addTask } from './reduxx/action/TaskAction'
import { ADD_TASK } from './reduxx/constants/actionTypes'
import { useDispatch } from 'react-redux'

const AddTask =() => {
    const [task, setTask] = useState("")
    console.log(task);
    
    const dispatch = useDispatch()



const handleADD = () => {
    dispatch(addTask(task))
    setTask("")


}
    
    return (
        <div>
            <input type="text"
            onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleADD}>Add Task</button>
        </div>
    )
}
export default AddTask