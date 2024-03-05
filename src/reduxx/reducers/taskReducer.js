import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../constants/actionTypes"

const intialState = {
    tasks: [
        { id: Math.random(), description: "redux", isdone: false },
        { id: Math.random(), description: "lunch", isdone: true }
    ],
    filter: "All"
}

const taskReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: Math.random(), description: payload, isDone: false }]
            }
        case COMPLETE_TASK:
            const toggleTasks = state.tasks.map(task =>
                task.id === payload.id
                    ? { ...payload, isDone: !payload.isDone }
                    : task
            )
            return {
                ...state,
                tasks: toggleTasks
            }
        case EDIT_TASK:
            const editeTasks = state.tasks.map(task =>
                task.id === payload.id
                ?{id: payload.id, description: payload.description, isDone: payload.isDone }
                : task
                )
            return {
                ...state,
                tasks:editeTasks
            }
        default:
            return state

    }

}

export default taskReducer