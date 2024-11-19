import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
    position: relative;
`

export const Header = styled.header`
`

export const Banner = styled(Image)`
    width: 100%;
    object-fit: cover;
    display: flex;
`

export const TodoContainer = styled.div`
    max-width: 600px;
    position: absolute;
    width: 100%;
    top: 3rem;
    left: 50%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    transform: translate(-50%);
`

export const TodoContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    color: white;
`

export const DarkModeIcon = styled(Image)`
    cursor: pointer;
`

export const InputContainer = styled.div`
    display: flex;
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.elements};
    margin-bottom: 1rem;
`

export const Input = styled.input`
    border: none;
    margin-left: .5rem;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
`

export const CheckboxLabel = styled.label<{ $isChecked: boolean }>`
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.checkbox_border};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-image: ${({ $isChecked, theme }) =>
        $isChecked
            ? `linear-gradient(120deg, ${theme.colors.gradient1}, ${theme.colors.gradient2})`
            : 'none'};
`

export const IconCheckImage = styled(Image)`
    &::selection {
        background-color: transparent;
    }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

export const TaskListContainer = styled.ul`
    height: 400px;
    flex-grow: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.elements};
`

export const TaskItem = styled.li<{ $checked: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme, $checked }) => $checked ? theme.colors.sub_text : theme.colors.text};
    text-decoration: ${props => props.$checked ? 'line-through' : 'none'};
    border-bottom: 1px solid ${({ theme }) => theme.colors.checkbox_border};
`

export const TaskText = styled.span`
    margin: auto;
    margin-left: .5rem;
`

export const DeleteIcon = styled(Image)`
    width: 15px;
    height: 15px;
    display: flex;
`

export const ListFooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.sub_text};
    font-weight: bold;
    border-top: 1px solid ${({ theme }) => theme.colors.checkbox_border};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    position: relative;
`

export const ListItemLeft = styled.span`

`

export const ListClearCompleted = styled.span`
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.text};
    }
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.sub_text};

    @media (max-width: 600px) {
        position: absolute;

        width: 100%;
        left: 0;
        top: 0;
        padding: 1rem;
        margin-top: 4rem;
        border-radius: 5px;
    }
`

export const FilterSpan = styled.span`
    &[aria-selected='true'] {
        color: ${({ theme }) => theme.colors.blue};
    }

    &:hover {
        color: ${({theme}) => theme.colors.text};
    }

    &::selection {
        background-color: transparent;
    }

    cursor: pointer;
`

export const FilterGetAll = styled(FilterSpan)`

`

export const FilterGetActive = styled(FilterSpan)`

`

export const FilterGetCompleted = styled(FilterSpan)`
`