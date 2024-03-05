import { ADD_TASK, EDIT_TASK } from "../constants/actionTypes"

export const addTask = (task) => {
    return{
        type: ADD_TASK,
        payload: task
    }
}
export const completeTask = (task) => {
    return{
        type: EDIT_TASK,
        payload: task
    }
}