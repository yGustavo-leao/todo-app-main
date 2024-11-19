import { TodoType } from "@/context/TodoContext"
import { sortTask } from "./sortTask"
import { getTask } from "./getTask"

export const createTask = (text: string, isCheck: boolean) => {
    const todos: TodoType[] = sortTask(getTask())
    if (text.length > 3) {
        todos.push({
            id: todos.length,
            task: text,
            check: isCheck
        })
    }
    localStorage.setItem('toDoList', JSON.stringify(todos))
    return todos
}