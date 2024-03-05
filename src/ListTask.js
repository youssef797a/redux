import React from 'react'
import Task from './Task'

const ListTask =({tasks}) => {
    return (
        <div>
            {tasks.map(task => {
                return <Task key={task.id} task={task} />
            })}
        </div>
    )
}
export default ListTask