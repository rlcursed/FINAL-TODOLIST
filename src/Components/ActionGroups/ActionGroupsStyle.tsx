import styled from "styled-components";

export const ActionGroupsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    width: 500px;
`

export const ActionGroupButton = styled.button`
    width: 300px;
    height: 50px;
    border: 2px solid black;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    cursor: pointer;
`