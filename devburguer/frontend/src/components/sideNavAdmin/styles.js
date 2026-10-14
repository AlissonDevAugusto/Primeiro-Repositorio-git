import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ContainerNav = styled.div`
  width: 320px;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 250px;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 70px;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 16px;
  }
  
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    gap: 4px;
  }

  @media (max-width: 560px) {
    gap: 0;
  }
`;

export const NavLinks = styled(Link)`
  width: 320px;
  height: 50px;
  border: none;
  color: #fff;
  background-color: ${props => props.$isActive ? '#9758a6' : 'transparent'};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-left: 30px;
  text-decoration: none;
  transition: 0.6s;

  @media (max-width: 900px) {
    width: auto;
    min-width: 0;
    height: 44px;
    padding: 0 12px;
    gap: 8px;
    font-size: 14px;
  }

  @media (max-width: 560px) {
    padding: 0 8px;
    font-size: 0;

    svg { font-size: 22px; }
  }
  
  &:hover {
    transition: 0.2s;
    color: ${props => props.$isActive ? '#FFF' : '#b1adaddd'};
  }
 
  
`;
export const ReturnLink = styled(Link)`
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  padding-right: 20px;
  text-decoration: none;

  @media (max-width: 560px) {
    padding-right: 0;
    font-size: 0;

    svg { font-size: 22px; }
  }

  &:hover {
    transition: 0.6s;
    color: ${(props) => props.theme.red};
  }
`;
