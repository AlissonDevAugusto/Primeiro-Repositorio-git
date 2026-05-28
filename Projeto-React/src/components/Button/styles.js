import styled from 'styled-components'

export const MyButton = styled.button`
    width: 200px;
    height: 44px;
    border-radius: 20px;
    border: ${props => props.theme === "primary" ? "none" : "1px solid #fff"} ;
    background: ${props => props.theme === "primary" ? "linear-gradient(180deg , #FE7E5D 0% , #FF6378 100%)" : "transparent"} ;
    color: #fff;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;

    &:hover {
        opacity: ${props => props.theme === "primary" ? "0.8" : "none"};
        background-color: ${props => props.theme === "primary" ? "none" : "#ffffff5e"}; 
        transition: 0.6s;

    }

    &:active {
        opacity: ${props => props.theme === "primary" ? "0.5" : "none"};
        background-color: ${props => props.theme === "primary" ? "none" : "#fff"};
        color: ${props => props.theme === "primary" ? "none" : "red"};
        border: ${props => props.theme === "primary" ? "none" : "none"};
    }
`