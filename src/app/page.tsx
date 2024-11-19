'use client'

import { Banner, CheckboxLabel, Container, DarkModeIcon, DeleteIcon, FilterContainer, FilterGetActive, FilterGetAll, FilterGetCompleted, Header, IconCheckImage, Input, InputContainer, ListClearCompleted, ListFooterContainer, ListItemLeft, TaskItem, TaskListContainer, TaskText, Title, TodoContainer, TodoContainerHeader } from "./home/Home.styled";
import mobileBannerDark from '../assets/images/bg-mobile-dark.jpg'
import mobileBannerLight from '../assets/images/bg-mobile-light.jpg'
import desktopBannerDark from '../assets/images/bg-desktop-dark.jpg'
import desktopBannerLight from '../assets/images/bg-desktop-light.jpg'
import iconSun from '../assets/images/icon-sun.svg'
import iconMoon from '../assets/images/icon-moon.svg'
import iconCheck from '../assets/images/icon-check.svg'
import iconDelete from '../assets/images/icon-cross.svg'
import { useEffect, useState } from "react";
import { TodoType } from "@/context/TodoContext";
import { useDarkTheme } from "@/context/DarkThemeContext";
import { sortTask } from "./home/utils/sortTask";
import { createTask } from "./home/utils/createTask";
import { updateTask } from "./home/utils/updateTask";
import { removeTask } from "./home/utils/removeTask";
import { removeCheckTask } from "./home/utils/removeCheckTask";
import { ListFilterType } from "@/types/ListFilterType";

export default function Home() {
  const [todo, setTodo] = useState<TodoType[]>()
  const [isCheck, setIsCheck] = useState(false)
  const [listFilter, setListFilter] = useState<ListFilterType>('all')
  const { isDark, setIsDark } = useDarkTheme()

  useEffect(() => {
    setTodo(sortTask(JSON.parse(localStorage.getItem('toDoList') || '[]')))
  }, [])

  const filteredTask = todo?.filter(task => {
    switch (listFilter) {
      case 'all':
        return true;
      case 'active':
        return !task.check;
      case 'completed':
        return task.check;
      default:
        return false;
    }
  })

  return (
    <Container>
      <Header>
        <picture>
          <source media="(max-width: 600px)" srcSet={isDark ? mobileBannerDark.src : mobileBannerLight.src} />
          <source media="(min-width: 601px)" srcSet={isDark ? desktopBannerDark.src : desktopBannerLight.src} />
          <Banner src={isDark ? mobileBannerDark : mobileBannerLight} alt="Banner image" quality={100} />
        </picture>
      </Header>

      <TodoContainer>
        <TodoContainerHeader>
          <Title>TODO</Title>
          <DarkModeIcon src={isDark ? iconMoon : iconSun} alt="Dark Mode icon" onClick={() => setIsDark(!isDark)} >
          </DarkModeIcon>
        </TodoContainerHeader>

        <InputContainer>
          <CheckboxLabel $isChecked={isCheck} onClick={() => setIsCheck(!isCheck)} >
            {isCheck && <IconCheckImage src={iconCheck} alt="Icon check image" />}
          </CheckboxLabel>
          <Input type="text" placeholder="Create a new todo" onKeyDown={e => {
            if (e.key === 'Enter') {
              setTodo(createTask(e.currentTarget.value, isCheck))
            }
          }} />
        </InputContainer>

        <TaskListContainer>
          {
            filteredTask?.map(task =>
              <TaskItem key={Math.random()} id={`${task.id}`} $checked={task.check}>
                <CheckboxLabel $isChecked={task.check} onClick={() => setTodo(updateTask(task))} >
                  {task.check && <IconCheckImage src={iconCheck} alt="Icon check image" />}
                </CheckboxLabel>

                <TaskText>{task.task}</TaskText>

                <DeleteIcon src={iconDelete} alt="Delete icon" onClick={() => setTodo(removeTask(task))} />
              </TaskItem>
            )
          }
        </TaskListContainer>
        <ListFooterContainer>
          <ListItemLeft>{filteredTask?.length} items left</ListItemLeft>

          <FilterContainer>
            <FilterGetAll aria-selected={listFilter === 'all' ? true : false} onClick={() => setListFilter('all')} >All</FilterGetAll>
            <FilterGetActive aria-selected={listFilter === 'active' ? true : false} onClick={() => setListFilter('active')} >Active</FilterGetActive>
            <FilterGetCompleted aria-selected={listFilter === 'completed' ? true : false} onClick={() => setListFilter('completed')} >Completed</FilterGetCompleted>
          </FilterContainer>

          <ListClearCompleted onClick={() => setTodo(removeCheckTask())} >Clear Completed</ListClearCompleted>
        </ListFooterContainer>
      </TodoContainer>
    </Container>
  );
}
