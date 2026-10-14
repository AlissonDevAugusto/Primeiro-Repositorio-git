import styled from 'styled-components';

export const ContainerButton = styled.button`
  height: 56px;
  width: 100%;
  background-color: #9758a6;
  color: #fff;
  font-family: 'Road Rage', sans-serif;
  font-size: ${({ $compact }) => ($compact ? '24px' : '30px')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  letter-spacing: 1px;
  margin-top: ${({ $compact }) => ($compact ? '0' : '70px')};

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='white' stroke-width='4' stroke-dasharray='7%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 7px;
  }
`;
