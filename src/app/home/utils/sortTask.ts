import { TodoType } from "@/context/TodoContext"

export const sortTask = (array: TodoType[]) => {
    for (let index = 0; index < array.length; index++) array[index].id = index
    const sortArray: TodoType[] = array
    return sortArray
}