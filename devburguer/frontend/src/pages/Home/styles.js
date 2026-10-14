import styled from 'styled-components';

import bannerHome from '../../assets/banner.png';
import backgroundHome from '../../assets/backgroundhome.png';

export const Banner = styled.div`
  background-image: url('${bannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  position: relative;

  h1 {
    font-size: 82px;
    font-weight: 400;
    color: #fff;
    font-family: 'Road Rage', sans-serif;
    position: absolute;
    right: 15%;
    top: 10%;
  }

  @media (max-width: 700px) {
    height: 330px;

    h1 {
      right: 8%;
      top: 14%;
      font-size: clamp(48px, 14vw, 72px);
    }
  }
`;

export const Container = styled.section`
  background-image: url('${backgroundHome}');
  background-size: auto;
  background-color: #eeebeb;
  

`;


