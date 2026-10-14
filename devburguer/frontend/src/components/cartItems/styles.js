import styled from "styled-components";

import { TrashIcon } from '@phosphor-icons/react';

export const ProductImage = styled.img`
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonFamily =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    button {
        background-color: #9758A6;
        height: 32px;
        width: 32px;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-size: 16px;
        

        &:hover {
            background-color: #6F357C;
        }
    }

    span {
        padding: 0 16px;
    }
`

export const EmptyCart = styled.p`
    font-size: 20px;
    font-weight: bold;

`

export const Trash = styled(TrashIcon)`
    cursor: pointer;
    height: 30px;
    width: 30px;
    color: #b82f11;

`

