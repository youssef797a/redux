import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTask } from './reduxx/action/TaskAction'
import { EDIT_TASK } from './reduxx/constants/actionTypes'

const Task = ({ task }) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.description)
  const hadelEdit = () => {
    const editedTask = {
      id:task.id,
      description: editValue,
      isDone: false
    }
    
    dispatch(EDIT_TASK(editedTask))
    setIsEditing(false)

  }


  return (
    <div className={task.isDone ? 'completed' : null} >
      {
        isEditing ? (
          <div>
            <input type="text"
            value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick ={hadelEdit}>save</button>
          </div>
        ) : (
          <div>
            <p onClick={() => dispatch(completeTask(task))}>{task.description}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>

          </div>
        )

      }
    </div>
  )
}
export default Task