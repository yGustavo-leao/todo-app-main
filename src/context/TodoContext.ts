import { createContext, useContext } from "react"

export type TodoType = {
    id: number,
    task: string,
    check: boolean
}

export type TodoContextType = TodoType[]

export const TodoContext = createContext<TodoContextType | undefined> (undefined)

export const useTodoContext = () => {
    const context = useContext(TodoContext)
    if (!context) throw new Error('TodoContext deve ser usado dentro de um TodoContextProvider');
    return context
}