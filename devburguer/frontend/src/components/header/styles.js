import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${props => props.theme.mainBlack};
  height: 60px;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  padding: 0 120px;

  @media (max-width: 900px) {
    padding: 0 28px;
  }

  @media (max-width: 640px) {
    height: auto;
    min-height: 60px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 20px;
    padding: 10px 16px;
  }
`;

export const HeaderLink = styled.div`
   display: flex;
   gap: 30px;

  hr {
    border: 1px solid #625E5E;
  }

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

export const ReactLink = styled(Link)`
    color: ${props => props.$isActive ? props => props.theme.purple : props => props.theme.white};
    border-bottom: ${props => props.$isActive && `1px solid ${props => props.theme.purple}`};
    text-decoration: none;
    transition: 0.1s;


    &:hover {
      color: #9758a6;
    }
`

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 30px;

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  span {
    color: #00f314;
  }

  button {
    color: red;
    font-size: 16px;
    transition: 0.1s;
    background-color: transparent;
    border: none;

    &:hover {
      color: #ad1b1b;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

`;
