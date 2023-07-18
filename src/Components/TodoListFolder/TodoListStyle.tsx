import styled from "styled-components";

export const TodoListStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`
export const TodoItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 20px;
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
    font-family: 'Roboto';
    align-items: center;
    flex-direction: row;
`
export const TodoItemButton = styled.button`
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 30px;
    border-radius:20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 150px;
`