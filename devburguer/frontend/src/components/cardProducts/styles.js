import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
  background-color: #fff;
  border-radius: 30px;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    p {
        color: #FF8C05;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        margin-top: 40px;
    }

    strong {
        color: #363636;
        font-size: 18px;
        font-weight: 700;
    }
  }

`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`;
