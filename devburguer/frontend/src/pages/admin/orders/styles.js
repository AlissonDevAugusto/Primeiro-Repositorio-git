import styled from "styled-components";
import Select from 'react-select';

export const Container = styled.div`
    min-height: calc(100vh - 40px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProductIMG = styled.img`
    height: 70px;
    padding: 5px;
    border-radius: 15px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 4px 0 24px;
    gap: clamp(20px, 8vw, 100px);
    flex-wrap: wrap;

`;

export const FilterOption = styled.button`
    font-size: 18px;
    border: none;
    transition: 0.4s;
    color: ${props => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray };
    border-bottom: ${ props => props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none' };
    font-weight: 500;
    padding-bottom: 5px;
    background: none;
`;
