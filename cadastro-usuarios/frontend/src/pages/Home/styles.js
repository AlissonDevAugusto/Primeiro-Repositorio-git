import styled from 'styled-components'

/* Estrutura : */

export const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #181f36;
    padding: 20px;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const ContainerInput = styled.div`
    display: flex; 
    gap: 24px;

`

export const Inputlabel = styled.label`
    color: #fff;
    font-weight: 800;

    span {
        color: red;
        font-weight: 800;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #d2dae2;
    padding: 15px;
    outline: none;
`





