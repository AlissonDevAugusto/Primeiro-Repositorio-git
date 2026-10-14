import styled from 'styled-components';

import backgroundHome from '../../assets/backgroundhome.png';

export const CheckoutShell = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 20px;
  background-color: #eeebeb;
  background-image: linear-gradient(135deg, #fff8 0%, #eeebebdd 100%), url('${backgroundHome}');
  background-size: cover, auto;
`;

export const CheckoutCard = styled.section`
  width: min(100%, 560px);
  padding: 42px 48px 38px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 60px #5c266933;

  @media (max-width: 560px) {
    padding: 32px 22px 28px;
  }
`;
