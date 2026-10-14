import styled from 'styled-components';
import backgroundHome from '../../../assets/backgroundhome.png';
import ReactSelect from 'react-select';
import { ButtonFollow } from '../../../components/button';
import {FolderPlusIcon} from '@phosphor-icons/react'

export const Container = styled.main`
    background-image: url('${backgroundHome}');
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
`;

export const ContainerForm = styled.div`
    min-height: 668px;
    width: 447px;
    border-radius: 10px;
    border: none;
    background-color: ${props => props.theme.black};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 520px) {
        width: 100%;
        min-height: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    gap: 20px;

    @media (max-width: 520px) {
        width: 100%;
        padding: 28px 20px;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
   
`;

export const Label = styled.label`
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: 500;
`;

export const Input = styled.input`
    height: 50px;
    width: 340px;
    border-radius: 7px;
    border: none;
    padding: 0 20px;
    font-size: 16px;

    @media (max-width: 400px) { width: 100%; }

`;

export const Select = styled(ReactSelect)`
    width: 340px;

    @media (max-width: 400px) { width: 100%; }
`;

export const Button = styled(ButtonFollow)`
    width: 340px;
    margin-top: 0;

    @media (max-width: 400px) { width: 100%; }
`;

export const IconAddImg = styled(FolderPlusIcon)`
    color: ${props => props.theme.white};
    font-size: 24px;
    flex-shrink: 0;

    
`;

export const ErrorMessage = styled.span`
    display: block;
    min-height: 20px;
    color: ${props => props.theme.darkRed};
    font-size: 14px;
    font-weight: 500;
    max-width: 340px;
    line-height: 20px;
`;

export const LabelUpload = styled.label`
    height: 50px;
    width: 340px;
    border: 2px dashed ${props => props.theme.white};
    padding: 12px;
    cursor: pointer;
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    input {
        display: none;
    }

    @media (max-width: 400px) { width: 100%; }
`;

export const FileName = styled.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ContainerCheck = styled.div`
    display: flex;
    gap: 20px;

    input {
        width: 20px;
        cursor: pointer;
    }
`;
