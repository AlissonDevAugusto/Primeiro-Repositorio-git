import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bannerCardapio from '../../assets/banner-cardapio.png';
import backgroundMenu from '../../assets/backgroundhome.png';

export const Container = styled.div`
  background-image: url('${backgroundMenu}');
  background-position: center;
  width: 100%;
  min-height: 100vh;
  background-color: #eeebeb;
`;

export const Banner = styled.div`
  background-image: url('${bannerCardapio}');
  background-color: #333;
  background-size: cover;
  background-position: center;
  height: 530px;
  width: 100%;
  position: relative;

  div {
    position: absolute;
    right: 16%;
    top: 13%;
    text-align: center;
    color: #fff;

    h1 {
      font-size: 96px;
      font-weight: 400;
      font-family: 'Road Rage', sans-serif;
      line-height: 80px;
      color: #fff;

      span {
        font-size: 96px;
        color: #ff8c05;
        font-family: 'Road Rage', sans-serif;
      }
    }

    span {
      font-size: 19px;
      font-weight: 400;
    }
  }

  @media (max-width: 700px) {
    height: 340px;

    div {
      right: 8%;
      top: 18%;

      h1, h1 span { font-size: clamp(52px, 15vw, 74px); }
    }
  }
`;

export const ContainerCategories = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const CategoryLink = styled(Link)`
  font-family: 'Road Rage', sans-serif;
  font-size: 55px;
  
  color: ${props => props.$isActiveCategory ? '#ff8c05' : '#9758A6'};
  text-decoration: none;
  border: none;
  border-bottom: ${props => props.$isActiveCategory && '3px solid #ff8c05' };
  transition: color 0.4s ease, border-color 0.4s ease;
  margin: 0 40px;

  @media (max-width: 700px) {
    display: inline-block;
    margin: 0 14px 12px;
    font-size: 44px;
  }


`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  gap: 100px;
  margin: 50px auto 0;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 80px 35px;
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 40px 24px;
    gap: 75px;
  }

`;
