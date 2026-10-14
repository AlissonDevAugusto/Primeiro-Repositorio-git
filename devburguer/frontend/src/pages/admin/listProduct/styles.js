import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ProductImage = styled.img`
  width: 80px;
  border-radius: 5px;
`;

export const EditButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.darkWhite};
  border-radius: 7px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transition: 0.5s;
    background-color: ${(props) => props.theme.purple};

    svg {
      transition: 0.4s;
      color: ${(props) => props.theme.white};
    }
  }
`;
