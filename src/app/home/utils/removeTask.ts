import { TodoType } from "@/context/TodoContext"
import { sortTask } from "./sortTask"
import { getTask } from "./getTask"

export const removeTask = (currentTask: TodoType) => {
    const todos: TodoType[] = sortTask(getTask())
    let newTodos = todos.filter(item => item.id !== currentTask.id)
    newTodos = sortTask(newTodos)
    localStorage.setItem('toDoList', JSON.stringify(newTodos))
    return newTodos
}