import { TodoType } from "@/context/TodoContext";
import { getTask } from "./getTask";
import { sortTask } from "./sortTask";

export const updateTask = (currentTask: TodoType) => {
    const todos: TodoType[] = sortTask(getTask())
    todos[currentTask.id].check = !todos[currentTask.id].check
    localStorage.setItem('toDoList', JSON.stringify(todos))
    return todos
}