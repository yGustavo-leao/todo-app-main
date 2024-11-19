import { TodoType } from "@/context/TodoContext"
import { sortTask } from "./sortTask"
import { getTask } from "./getTask"

export const removeCheckTask = () => {
    const todos: TodoType[] = sortTask(getTask())
    let newTodos = todos.filter(item => !item.check)
    newTodos = sortTask(newTodos)
    localStorage.setItem('toDoList', JSON.stringify(newTodos))
    return newTodos
}